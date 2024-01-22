package org.baaahs.auth

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import org.baaahs.Env
import org.baaahs.UnauthorizedException
import org.baaahs.UserInfo
import org.baaahs.UserSession
import org.slf4j.LoggerFactory

class GoogleAuthApi(private val httpClient: HttpClient) {
    fun getServerSettings(
        env: Env,
        onStateCreated: suspend (call: ApplicationCall, state: String) -> Unit
    ): OAuthServerSettings.OAuth2ServerSettings =
        OAuthServerSettings.OAuth2ServerSettings(
            name = "google",
            authorizeUrl = "https://accounts.google.com/o/oauth2/auth",
            accessTokenUrl = "https://accounts.google.com/o/oauth2/token",
            requestMethod = HttpMethod.Post,
            clientId = env.secretsManager.googleClientId,
            clientSecret = env.secretsManager.googleClientSecret,
            defaultScopes = listOf("https://www.googleapis.com/auth/userinfo.profile"),
            extraAuthParameters = listOf("access_type" to "offline"),
            onStateCreated = onStateCreated
        )

    suspend fun getUserInfo(userSession: UserSession): UserInfo {
        try {
            val userInfo: UserInfo =
                httpClient.get("https://www.googleapis.com/oauth2/v2/userinfo") {
                    headers {
                        append(HttpHeaders.Authorization, "Bearer ${userSession.token}")
                    }
                    logger.info("HTTP GET www.googleapis.com auth token=${userSession.token}")
                }.body()
            logger.info("userInfo = $userInfo")
            return userInfo
        } catch (e: ClientRequestException) {
            if (e.response.status == HttpStatusCode.Unauthorized) {
                logger.error("Unauthorized! ${e.message} ${e::class.simpleName}", e)
                throw UnauthorizedException(e)
            } else {
                logger.error("Exception! ${e.message} ${e::class.simpleName}", e)
                throw e
            }
        } catch (e: Exception) {
            logger.error("Exception! ${e.message} ${e::class.simpleName}", e)
            throw e
        }
    }

    companion object {
        private val logger = LoggerFactory.getLogger(GoogleAuthApi::class.java)
    }
}