package org.baaahs

import com.mongodb.ConnectionString
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.baaahs.assman.model.Asset
import org.baaahs.util.getLogger
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
        GlobalScope.launch {
            try {
                logger.info("Database names: ${mongoDbClient.listDatabaseNames()}")
            } catch (e: Exception) {
                logger.error("Failed to list databases.", e)
            }
        }
        GlobalScope.launch {
            try {
                logger.info("Collection names: ${database.listCollectionNames()}")
            } catch (e: Exception) {
                logger.error("Failed to list collections.", e)
            }
        }
        logger.info("Connected to ${database.name}.")
    }

    override val assets = database.getCollection<Asset>()

    companion object {
        private val logger = getLogger<MongoDbStore>()
    }
}