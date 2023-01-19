package org.baaahs.assman.view

import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import kotlinx.js.jso
import org.baaahs.assman.model.BattleshipGrid
import org.baaahs.assman.model.LatLong
import react.ChildrenBuilder
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.memo
import react.useEffect
import react.useEffectOnce
import react.useMemo
import react.useState
import web.geolocation.GeolocationPosition
import web.geolocation.GeolocationWatchId
import web.navigator.navigator
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt

class GeoLocator {
    suspend fun getCurrentPosition(): GeolocationPosition? {
        val positionChannel = Channel<GeolocationPosition>()
        navigator.geolocation.getCurrentPosition({ position ->
            println("position = ${position}")
            scope.launch { positionChannel.send(position) }
        }, options = jso { enableHighAccuracy = true } )
        return positionChannel.receive()
    }

    fun watchPosition(callback: (GeolocationPosition) -> Unit): Watcher {
        val positionChannel = Channel<GeolocationPosition>()
        val id = navigator.geolocation.watchPosition(callback, options = jso { enableHighAccuracy = true } )
        return Watcher(id)
    }

    class Watcher(private val id: GeolocationWatchId) {
        fun release() {
            navigator.geolocation.clearWatch(id)
        }
    }
}

val InclineMapPage = FC<Props> {
    val geoLocator = useMemo { GeoLocator() }
    var position by useState<GeolocationPosition?> { null }
    useEffectOnce {
        val watcher = geoLocator.watchPosition { position = it }
        cleanup { watcher.release() }
    }
//    scope.launch { position = geoLocator.getCurrentPosition() }

    position?.let {
        val coords = it.coords
        val latLong = LatLong(coords.latitude, coords.longitude)
        div { +"Latitude: ${coords.latitude}" }
        div { +"Longitude: ${coords.longitude}" }
        div { +"Altitude: ${coords.altitude}" }

//        thingy(latLong)
        h1 { +"Battleship Position: ${inclineBattleshipGrid.toPosition(latLong).let { (x,y) ->
            "${(x * 100).roundToInt() / 100.0},${(y * 100).roundToInt() / 100.0}"
        }}" }
        h1 { +"Battleship Coords: ${inclineBattleshipGrid.toCoord(latLong)}" }


    } ?: "Locating..."
}

private fun ChildrenBuilder.thingy(latLong: LatLong ) {
    val minCoord = LatLong(
        min(a10Coord.latitude, k0Coord.latitude),
        min(a10Coord.longitude, k0Coord.longitude)
    )

    val maxCoord = LatLong(
        max(a10Coord.latitude, k0Coord.latitude),
        max(a10Coord.longitude, k0Coord.longitude)
    )

    val zone = maxCoord - minCoord
    val offset = latLong - minCoord
    val latPos = offset.latitude / zone.latitude
    val longPos = offset.longitude / zone.longitude
    val latOpts = "0123456789"
    val longOpts = "ABCDEFGHIJ"
    div { +"Position: $latPos, $longPos" }
    h1 { +"Coords: ${latOpts.find(latPos)}${longOpts.find(longPos)}" }
    h1 { +"Coordinate: ${latOpts.check(latPos)}${longOpts.check(longPos)}" }
}

fun String.find(where: Double): String {
    val i = (where * length).toInt()
        .let { if (it < 0) length + it else it }
        .mod(length)
    return get(i).toString()
}
fun String.check(where: Double): String {
    val i = (where * length).toInt()
    return if (i < 0) "-" else if (i >= length) "+" else "_"
}

val inclineA0 = LatLong(39.375943, -123.094508)
val inclineK10 = LatLong(39.368254, -123.085697)
val inclineBattleshipGrid = BattleshipGrid(inclineA0, inclineK10)

val a10Coord = LatLong(39.37074, -123.08760)
val k0Coord = LatLong(39.37175, -123.08622)
