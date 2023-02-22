package org.baaahs

import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient
import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueRequest
import java.util.Properties

interface SecretsManager {
    val aesKey: String?
    val mongoDbUri: String?
}

class FakeSecretsManager(
    override val aesKey: String? = null,
    override val mongoDbUri: String? = null
) : SecretsManager

class PropertiesSecretsManager(
    private val props: Properties
) : SecretsManager {
    override val aesKey: String?
        get() = getSecret("aesKey")
    override val mongoDbUri: String?
        get() = getSecret("mongoDbUri")

    private fun getSecret(name: String): String? = props.getProperty(name)
}

class AwsSecretsManager : SecretsManager {
    override val aesKey: String?
        get() = getSecret("baaahs-org_PROD_AES_key")

    override val mongoDbUri: String?
        get() = getSecret("baaahs-dot-org_MONGODB_URI_PROD")

    private fun getSecret(secretName: String): String? {
        val region: Region = Region.of("us-east-1")

        // Create a Secrets Manager client
        val client = SecretsManagerClient.builder()
            .region(region)
            .build()
        val getSecretValueRequest = GetSecretValueRequest.builder()
            .secretId(secretName)
            .build()
        val getSecretValueResponse = try {
            client.getSecretValue(getSecretValueRequest)
        } catch (e: Exception) {
            // For a list of exceptions thrown, see
            // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
            throw e
        }
        return getSecretValueResponse.secretString()
    }
}