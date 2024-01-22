package org.baaahs.assman.model

import kotlin.math.PI
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.sin
import kotlin.math.sqrt

data class LatLong(
    val latitude: Double,
    val longitude: Double
) {
    operator fun plus(other: LatLong) =
        LatLong(latitude + other.latitude, longitude + other.longitude)

    operator fun minus(other: LatLong) =
        LatLong(latitude - other.latitude, longitude - other.longitude)

    /** Returns distance in km. */
    fun distanceTo(other: LatLong): Double {
        val dLat = deg2rad(other.latitude - latitude)
        val dLon = deg2rad(other.longitude - longitude)
        val a =
            sin(dLat / 2) * sin(dLat / 2) +
                cos(deg2rad(latitude)) * cos(deg2rad(other.latitude)) *
                sin(dLon / 2) * sin(dLon / 2)

        val c = 2 * atan2(sqrt(a), sqrt(1 - a))
        return earthRadius * c
    }

    companion object {
        const val earthRadius = 6371 // in km

        fun deg2rad(degree: Double) =
            degree * (PI / 180)
    }
}

fun Double.toImperial(): String {
    val km = this
    val milesPerKm = 0.621371192
    val miles = km * milesPerKm
    return buildList {
        miles.toInt().let { if (it > 0) add("${it}mi") }
        val feet = (miles * 5280) % 5280
        feet.toInt().let { if (it > 0) add("${it}ft") }
        val inches = (feet * 12) % 12
        inches.toInt().let { if (it > 0) add("${it}in") }
    }.joinToString(" ").ifBlank { "0" }
}

fun Pair<Double, Double>.toImperial(): String =
    "${first.toImperial()} ✖️${second.toImperial()}"