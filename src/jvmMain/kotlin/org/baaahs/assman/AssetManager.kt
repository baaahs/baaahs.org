package org.baaahs.assman

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.baaahs.Env
import org.baaahs.MongoDbStore
import org.baaahs.assman.model.Asset
import org.baaahs.util.newId
import org.litote.kmongo.eq

fun Routing.assetManager(env: Env) {
    val store = MongoDbStore(env.secretsManager)
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
}