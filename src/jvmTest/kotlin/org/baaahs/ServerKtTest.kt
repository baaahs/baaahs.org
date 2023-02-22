package org.baaahs

import io.ktor.client.request.*
import io.ktor.server.testing.*
import org.spekframework.spek2.Spek

object ServerKtSpek : Spek({
    fun testGetLogin() = testApplication {
        application {
            main()
        }
        client.get("/login").apply {
            TODO("Please write your test here")
        }
    }
})