package org.baaahs

import java.util.*
import javax.crypto.Cipher
import javax.crypto.SecretKey
import javax.crypto.spec.SecretKeySpec

object AesResource {
    fun load(key: String, resource: String): String {
        val secretKey: SecretKey =
            SecretKeySpec(Base64.getDecoder().decode(key), "AES")
        val cipher = Cipher.getInstance("AES")
            ?: error("Unknown cipher AES.")
        cipher.init(Cipher.DECRYPT_MODE, secretKey)
        val encryptedText =
            this::class.java.classLoader.getResource(resource)?.readText()
                ?: error("No encrypted text.")
        val decryptedBytes: ByteArray = cipher.doFinal(
            Base64.getDecoder().decode(encryptedText)
        )
        return String(decryptedBytes)
    }
}