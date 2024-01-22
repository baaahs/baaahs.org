package org.baaahs

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.html.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import io.ktor.util.pipeline.*
import kotlinx.html.HTML
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import org.baaahs.auth.GoogleAuthApi
import org.slf4j.LoggerFactory
import java.io.File
import java.util.*
import kotlin.collections.set

private val logger = LoggerFactory.getLogger("org.baaahs.Server")

val applicationHttpClient = HttpClient(CIO) {
    expectSuccess = true

    install(HttpTimeout) {
        requestTimeoutMillis = 3000
    }

    install(io.ktor.client.plugins.contentnegotiation.ContentNegotiation) {
        json(Json { ignoreUnknownKeys = true })
    }
}

fun main(httpClient: HttpClient = applicationHttpClient) {
    val port = System.getenv("PORT")?.toInt() ?: 9090

    val secretsManager = when (System.getenv("SECRETS_MANAGER")) {
        "AWS" -> AwsSecretsManager()
        else -> PropertiesSecretsManager(Properties().apply {
            load(File("local.properties").reader())
        })
    }
    val envName = System.getenv("ENV_NAME") ?: "dev"
    val hostUrl = when (envName) {
        "prod" -> "https://baaahs.org"
        else -> "http://localhost:$port"
    }
    val env = Env(hostUrl, secretsManager)

    embeddedServer(
        Netty,
        port,
        watchPaths = listOf("classes", "developmentExecutable"),
        module = { Application::baaahsApplicationModule.invoke(this, env, httpClient) }
    ).start(wait = true)
}

data class UserSession(val state: String, val token: String)

@Serializable
data class UserInfo(
    val id: String,
    val name: String,
    @SerialName("given_name") val givenName: String,
    @SerialName("family_name") val familyName: String,
    val picture: String,
    val locale: String
) {
    companion object {
        const val path = "/user-session"
    }
}

fun main() {
    main(applicationHttpClient)
}

fun Application.baaahsApplicationModule(env: Env, httpClient: HttpClient) {
    val googleAuthApi = GoogleAuthApi(httpClient)

    install(ContentNegotiation) {
        json()
    }
    install(CORS) {
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Delete)
        anyHost()
    }
    install(Compression) {
        gzip()
    }

    install(Sessions) {
        cookie<UserSession>("user_session")
    }

    val redirects = mutableMapOf<String, String>()
    install(Authentication) {
        oauth("auth-oauth-google") {
            urlProvider = { "${env.hostUrl}/callback" }
            providerLookup = {
                googleAuthApi.getServerSettings(env) { call, state ->
                    redirects[state] = call.request.queryParameters["redirectUrl"]!!
                }
            }
            client = httpClient
        }
    }

    install(StatusPages) {
        status(HttpStatusCode.NotFound) { call, status ->
            logger.error("404: ${call.request.uri} not found")
            call.respondText(text = "404: This sheep intentionally left blank.", status = status)
        }

        exception<Throwable> { call, cause ->
            logger.error("500: $cause", cause)
            call.respondText(text = "500: $cause", status = HttpStatusCode.InternalServerError)
        }
    }

    routing {
        authenticate("auth-oauth-google") {
            get("/login") {
                // Redirects to 'authorizeUrl' automatically
            }

            get("/callback") {
                val principal: OAuthAccessTokenResponse.OAuth2? = call.principal()
                logger.info("Callback: $principal state: ${principal?.state} accessToken: ${principal?.accessToken}")
                call.sessions.set(UserSession(principal!!.state!!, principal.accessToken))
                val redirect = redirects[principal.state!!]
                call.respondRedirect(redirect!!)
            }
        }

        get("/new/{...}") {
            call.respondHtml(HttpStatusCode.OK, HTML::index)
        }

        staticResources("/baaahs-dot-org.js", "")

        staticResources("/", "docs")
        get("setup/") { respondWith("setup/index.html", "docs") }


        get("/2023-responses.json") {
            val key = env.secretsManager.aesKey ?: error("No AES_KEY set.")
            call.respondText(
                AesResource.load(key, "2023-responses.json.aes"),
                ContentType.Application.Json
            )
        }

        // redirects to keep!
        get("/drive") { call.respondRedirect("https://drive.google.com/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg") }
        get("/pspride") { call.respondRedirect("/psp/") }
        get("/join") { call.respondRedirect("https://goo.gl/forms/XUvltyxql2") }
        get("/setup") { call.respondRedirect("/setup/") }
        get("/geometry") { call.respondRedirect("https://baaahs.github.io/geometry/html/viewer.html?#map") }
        get("/model") { call.respondRedirect("https://baaahs.github.io/geometry/html/viewer.html?#map") }
        get("/cal") { call.respondRedirect("https://calendar.google.com/calendar?cid=ODlydDZ0MWs1am1oMm9odnZicXBvbTZyMW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ") }
        get("/cal-private") { call.respondRedirect("https://calendar.google.com/calendar/embed?src=eo8lcds32ki40o14dr6m5t0o5s%40group.calendar.google.com&ctz=America%2FLos_Angeles") }
        get("/slack") { call.respondRedirect("https://baaahs.slack.com") }
        get("/slack-invite") { call.respondRedirect("https://join.slack.com/t/baaahs/shared_invite/enQtODg3MTE3NTk1ODA4LTRhMDEyZTY1MmI4YjIzN2JlYmUxMWQyNGMyYjA4MDhkMmMwMTU3YWFjOTVjNGZhZGY3YTc4MTNlZDE1NzFmMmY") }

        // 2020
        get("/2020") { call.respondRedirect("https://drive.google.com/drive/folders/1-5VGf1gZXyzGN1lYNVF1KwGBrJ6n9t4L") }
        get("/2020-form") { call.respondRedirect("https://docs.google.com/forms/d/e/1FAIpQLSfuh4BvWp1q4eQ_W_sVCDsKmlOPPB1N5RekJHLTjCsR5qdeFQ/viewform") }
        get("/2020-doc") { call.respondRedirect("https://docs.google.com/document/d/10Do2qdITwrQxGOeMGd7pe1jrIxQejF-W5jHK2wbagfE") }
        get("/2020-sheet") { call.respondRedirect("https://docs.google.com/spreadsheets/d/11FeKLaktPhMq_Oh_mG8TBK3U9_eY2oHBGxE0T3GzLhU") }

        // 2022
        get("/crew") { call.respondRedirect("https://docs.google.com/document/d/11mQX1lZpP0rMNNV1Uni_J0hutXaMEhsjvKtermUuY6Q") }

        // 2023
        get("/apply") { call.respondRedirect("https://bit.ly/baaahs-2023-application") }
        get("/campout") { call.respondRedirect("https://baaahs.ticketspice.com/baaahs-campout") }
        get("/dj") { call.respondRedirect("https://docs.google.com/forms/d/e/1FAIpQLSeaDIVG7c5uKHetUvo1IX4R6PrTg1agjyGdEMnxYOvTBCF_YQ/viewform?usp=sf_link") }

        // old URLs to support for a while!
        get("/shifts") { call.respondRedirect("https://www.volunteerspot.com/login/entry/375755452038") } // todo kill after 20151201


//        assetManager(env)

        route(UserInfo.path) {

            get {
                logger.info("GET ${UserInfo.path}...")
                val userSession: UserSession? = call.sessions.get()
                var userInfo: UserInfo? = null
                if (userSession != null) {
                    try {
                        userInfo = googleAuthApi.getUserInfo(userSession)
                        call.respond(userInfo)
                        logger.info("FINISHED")
                    } catch (e: UnauthorizedException) {
                        call.sessions.clear<UserSession>()
                    }
                }

                if (userInfo == null) {
                    val redirectUrl = URLBuilder("${env.hostUrl}/login").run {
                        parameters.append("redirectUrl", call.request.uri)
                        build()
                    }
                    call.respondRedirect(redirectUrl)
                }
            }
        }
    }
}

private suspend fun PipelineContext<Unit, ApplicationCall>.respondWith(path: String, resourcePackage: String) {
    val file = call.resolveResource(path, resourcePackage)
    if (file is OutgoingContent)
        call.respond(HttpStatusCode.OK, file)
}

class UnauthorizedException(cause: Exception) : Exception(cause)