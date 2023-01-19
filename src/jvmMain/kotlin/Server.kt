import org.baaahs.assman.model.Asset
import com.mongodb.ConnectionString
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
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import io.ktor.util.*
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.eq
import org.litote.kmongo.id.UUIDStringIdGenerator
import org.litote.kmongo.reactivestreams.KMongo

val connectionString: ConnectionString? = System.getenv("MONGODB_URI")?.let {
    ConnectionString("$it?retryWrites=false")
}

val client =
    if (connectionString != null) KMongo.createClient(connectionString).coroutine else KMongo.createClient().coroutine
val database = client.getDatabase(connectionString?.database ?: "test")
val collection = database.getCollection<Asset>()

val applicationHttpClient = HttpClient(CIO) {
    install(io.ktor.client.plugins.contentnegotiation.ContentNegotiation) {
        json()
    }
}

fun main(httpClient: HttpClient = applicationHttpClient) {
    val port = System.getenv("PORT")?.toInt() ?: 9090
    embeddedServer(
        Netty, port,
        watchPaths = listOf("classes", "developmentExecutable"),
    ) {
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
                        clientId = System.getenv("GOOGLE_CLIENT_ID"),
                        clientSecret = System.getenv("GOOGLE_CLIENT_SECRET"),
                        defaultScopes = listOf("https://www.googleapis.com/auth/userinfo.profile"),
                        extraAuthParameters = listOf("access_type" to "offline"),
                        onStateCreated = { call, state ->
                            System.err.println("***********************")
                            System.err.println(call.request.queryParameters.toMap())
                            redirects[state] = call.request.queryParameters["redirectUrl"]!!
                        }
                    )
                }
                client = httpClient
            }
        }

        routing {
            get("/") {
                call.respondText(
                    this::class.java.classLoader.getResource("index.html")!!.readText(),
                    ContentType.Text.Html
                )
            }

            get("/incline-map") {
                call.respondText(
                    this::class.java.classLoader.getResource("index.html")!!.readText(),
                    ContentType.Text.Html
                )
            }

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

            static("/") {
                resources("")
            }

            route(Asset.path) {
                get {
                    call.respond(collection.find().toList())
                }
                get("/{id}") {
                    val id = call.parameters["id"] ?: error("Invalid get request")
                    call.respond(collection.findOneById(id) ?: HttpStatusCode.NotFound)
                }
                post {
                    collection.insertOne(call.receive<Asset>().copy(id = newId<Asset>()))
                    call.respond(HttpStatusCode.OK)
                }
                delete("/{id}") {
                    val id = call.parameters["id"] ?: error("Invalid delete request")
                    collection.deleteOne(Asset::id eq id)
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
                            println("userInfo = $userInfo")
                            call.respond(userInfo)
                        } catch (e: ClientRequestException) {
                            try {
                                val errorResponse: ErrorResponse = e.response.body()
                                println("errorResponse = $errorResponse")
                            } catch (e2: Exception) {
                                e2.printStackTrace()
                                println("error response: ${e.response.bodyAsText()}")
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
    }.start(wait = true)
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