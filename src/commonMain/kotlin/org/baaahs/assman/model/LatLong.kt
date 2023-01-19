package org.baaahs.assman.model

data class LatLong(
    val latitude: Double,
    val longitude: Double
) {
    operator fun plus(other: LatLong) =
        LatLong(latitude + other.latitude, longitude + other.longitude)

    operator fun minus(other: LatLong) =
        LatLong(latitude - other.latitude, longitude - other.longitude)
}