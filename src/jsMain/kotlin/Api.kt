import org.baaahs.assman.model.Asset
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*

private val jsonClient = HttpClient {
    install(ContentNegotiation) {
        json()
    }
}

suspend fun getAssetList(): List<Asset> {
    return jsonClient.get(Asset.path).body()
}

suspend fun getAsset(id: String): Asset? {
    return jsonClient.get(Asset.path + "/${id}").body()
}

suspend fun addAsset(asset: Asset) {
    jsonClient.post(Asset.path) {
        contentType(ContentType.Application.Json)
        setBody(asset)
  }
}

suspend fun deleteAsset(asset: Asset) {
    jsonClient.delete(Asset.path + "/${asset.id}")
}
