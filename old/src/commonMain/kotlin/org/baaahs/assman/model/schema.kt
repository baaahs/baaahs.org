package org.baaahs.assman.model

import kotlinx.datetime.Instant
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Asset(
    @SerialName("_id")
    val id: String,
    val tag: String,
    val name: String,
    val notes: String? = null,
    val state: AssetState = AssetState.Normal,
    val isContainer: Boolean = false,
    val containerId: String? = null,
    val latestScan: Scan? = null,
    val createdAt: Instant,
    val updatedAt: Instant
) {
    companion object {
        const val path = "/asset"
    }
}

enum class AssetState {
    Normal,
    Lost,
    Destroyed
}

@Serializable
data class Event(
    val name: String,
    val createdAt: Instant,
    val updatedAt: Instant
) {
    companion object {
        const val path = "/event"
    }
}

@Serializable
data class Scan(
    val asset: Asset,
    val user: User,
    val event: Event,
    val location: Location?,
    val containerScan: Scan?,
    val intoContainer: Asset?,
    val createdAt: Instant,
    val updatedAt: Instant
) {
    companion object {
        const val path = "/scan"
    }
}

@Serializable
data class Location(
    val latitude: Double,
    val longitude: Double,
    val accuracy: Double,
    val altitude: Double,
    val altitudeAccuracy: Double
)

@Serializable
data class User(
    val name: String,
    val email: String,
    val createdAt: Instant,
    val updatedAt: Instant
) {
    companion object {
        const val path = "/user"
    }
}