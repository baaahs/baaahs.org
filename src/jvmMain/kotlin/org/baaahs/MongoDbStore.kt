package org.baaahs

import com.mongodb.ConnectionString
import org.baaahs.assman.model.Asset
import org.litote.kmongo.coroutine.coroutine
import org.litote.kmongo.reactivestreams.KMongo

class MongoDbStore(secretsManager: SecretsManager) : Store {
    private val connectionString: ConnectionString? = secretsManager.mongoDbUri?.let {
        ConnectionString(it)
    }
    private val mongoDbClient = (
        connectionString?.let { KMongo.createClient(it) }
            ?: KMongo.createClient()
        ).coroutine
    private val database = mongoDbClient.getDatabase(connectionString?.database ?: "test")

    init {
        println("Connected to ${database.name}.")
    }

    override val assets = database.getCollection<Asset>()
}