package org.baaahs

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.network.sockets.*
import io.ktor.client.plugins.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
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
import io.ktor.util.*
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import org.baaahs.assman.model.Asset
import org.litote.kmongo.eq
import org.litote.kmongo.id.UUIDStringIdGenerator
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.io.File
import java.util.*

private val secretsManager = when (System.getenv("SECRETS_MANAGER")) {
    "AWS" -> AwsSecretsManager()
    else -> PropertiesSecretsManager(Properties().apply {
        load(File("local.properties").reader())
    })
}

private val store = MongoDbStore(secretsManager)
private val logger = LoggerFactory.getLogger("Server")

val applicationHttpClient = HttpClient(CIO) {
    install(io.ktor.client.plugins.contentnegotiation.ContentNegotiation) {
        json()
    }
}

fun main(httpClient: HttpClient = applicationHttpClient) {
    val port = System.getenv("PORT")?.toInt() ?: 9090
    embeddedServer(
        Netty,
        port,
        watchPaths = listOf("classes", "developmentExecutable"),
        module = { Application::baaahsApplicationModule.invoke(this, port, httpClient) }
    ).start(wait = true)
}

private fun <T> newId() = UUIDStringIdGenerator.generateNewId<T>().toString()

@Serializable
data class ErrorResponse(
    val code: Int,
)

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

fun Application.baaahsApplicationModule(port: Int, httpClient: HttpClient) {
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
            urlProvider = { "http://localhost:$port/callback" }
            providerLookup = {
                OAuthServerSettings.OAuth2ServerSettings(
                    name = "google",
                    authorizeUrl = "https://accounts.google.com/o/oauth2/auth",
                    accessTokenUrl = "https://accounts.google.com/o/oauth2/token",
                    requestMethod = HttpMethod.Post,
                    clientId = secretsManager.googleClientId,
                    clientSecret = secretsManager.googleClientSecret,
                    defaultScopes = listOf("https://www.googleapis.com/auth/userinfo.profile"),
                    extraAuthParameters = listOf("access_type" to "offline"),
                    onStateCreated = { call, state ->
                        redirects[state] = call.request.queryParameters["redirectUrl"]!!
                    }
                )
            }
            client = httpClient
        }
    }

    install(StatusPages) {
        status(HttpStatusCode.NotFound) { call, status ->
            call.respondText(text = "404: This sheep intentionally left blank.", status = status)
        }

        exception<Throwable> { call, cause ->
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
                call.sessions.set(UserSession(principal!!.state!!, principal.accessToken))
                val redirect = redirects[principal.state!!]
                call.respondRedirect(redirect!!)
            }
        }

        static("/baaahs-dot-org.js") {
            defaultResource("baaahs-dot-org.js")
        }

        static("") {
            resources("docs")
            defaultResource("index.html", "docs")
        }

        get("/2023-responses.json") {
            val key = secretsManager.aesKey ?: error("No AES_KEY set.")
            call.respondText(
                AesResource.load(key, "2023-responses.json.aes"),
                ContentType.Application.Json
            )
        }

        // redirects to keep!
        get("/drive") { call.respondRedirect("https://drive.google.com/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg") }
        get("/pspride") { call.respondRedirect("/psp/") }
        get("/join") { call.respondRedirect("https://goo.gl/forms/XUvltyxql2") }

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

        // old URLs to support for a while!
        get("/shifts") { call.respondRedirect("http://www.volunteerspot.com/login/entry/375755452038") } // todo kill after 20151201


        route(Asset.path) {
            get {
                call.application.environment.log.info("Hello from /api/v1!")

                call.respond(store.assets.find().toList())
            }
            get("/{id}") {
                val id = call.parameters["id"] ?: error("Invalid get request")
                call.respond(store.assets.findOneById(id) ?: HttpStatusCode.NotFound)
            }
            post {
                store.assets.insertOne(call.receive<Asset>().copy(id = newId<Asset>()))
                call.respond(HttpStatusCode.OK)
            }
            delete("/{id}") {
                val id = call.parameters["id"] ?: error("Invalid delete request")
                store.assets.deleteOne(Asset::id eq id)
                call.respond(HttpStatusCode.OK)
            }
        }

        route(UserInfo.path) {
            get {
                val userSession: UserSession? = call.sessions.get()
                if (userSession != null) {
                    try {
                        val userInfo: UserInfo =
                            httpClient.get("https://www.googleapis.com/oauth2/v2/userinfo") {
                                headers {
                                    append(
                                        HttpHeaders.Authorization,
                                        "Bearer ${userSession.token}"
                                    )
                                }
                            }.body()
                        logger.info("userInfo = $userInfo")
                        call.respond(userInfo)
                    } catch (e: ClientRequestException) {
                        try {
                            val errorResponse: ErrorResponse = e.response.body()
                            logger.info("errorResponse = $errorResponse")
                        } catch (e2: Exception) {
                            e2.printStackTrace()
                            logger.info("error response: ${e.response.bodyAsText()}")
                        }
                        call.respond("foo!")
                    } catch (e: ConnectTimeoutException) {
                        call.respond("timeout!")
                    }
                } else {
                    val redirectUrl = URLBuilder("http://localhost:$port/login").run {
                        parameters.append("redirectUrl", call.request.uri)
                        build()
                    }
                    call.respondRedirect(redirectUrl)
                }
            }
        }
    }
}