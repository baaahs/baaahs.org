package org.baaahs

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.contentOrNull
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.baaahs.util.getLogger
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient
import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueRequest
import java.util.*

interface SecretsManager {
    val aesKey: String?
    val mongoDbUri: String?
    val googleClientId: String
    val googleClientSecret: String
}

class FakeSecretsManager(
    override val aesKey: String? = null,
    override val mongoDbUri: String? = null,
    override val googleClientId: String,
    override val googleClientSecret: String
) : SecretsManager

class PropertiesSecretsManager(
    private val props: Properties
) : SecretsManager {
    override val aesKey: String?
        get() = getSecret("aesKey")
    override val mongoDbUri: String?
        get() = getSecret("mongoDbUri")
    override val googleClientId: String
        get() = getSecret("googleClientId")
            ?: error("No googleClientId in secrets file.")
    override val googleClientSecret: String
        get() = getSecret("googleClientSecret")
            ?: error("No googleClientSecret in secrets file.")

    private fun getSecret(name: String): String? = props.getProperty(name)
}

class AwsSecretsManager(
    secretName: String = "baaahs-dot-org_secrets_PROD",
    region: Region = Region.of("us-east-1")
) : SecretsManager {
    private val secrets = run {
        val client = SecretsManagerClient.builder()
            .region(region)
            .build()
        val getSecretValueRequest = GetSecretValueRequest.builder()
            .secretId(secretName)
            .build()
        val getSecretValueResponse = client.getSecretValue(getSecretValueRequest)
        val secretsJson = getSecretValueResponse.secretString()
        Json.parseToJsonElement(secretsJson).jsonObject.toMap()
            .mapValues { it.value.jsonPrimitive.contentOrNull }
            .also {
                getLogger<AwsSecretsManager>().info("Found secrets: ${it.keys}")
            }
    }

    override val aesKey: String? by secrets
    override val mongoDbUri: String? by secrets
    override val googleClientId: String by secrets
    override val googleClientSecret: String by secrets
}