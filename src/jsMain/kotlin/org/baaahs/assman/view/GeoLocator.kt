package org.baaahs.assman.view

import js.core.jso
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import org.baaahs.util.scope
import web.geolocation.GeolocationPosition
import web.geolocation.GeolocationWatchId
import web.navigator.navigator

class GeoLocator {
    suspend fun getCurrentPosition(): GeolocationPosition {
        val positionChannel = Channel<GeolocationPosition>()
        navigator.geolocation.getCurrentPosition({ position ->
            println("position = ${position}")
            scope.launch { positionChannel.send(position) }
        }, options = jso { enableHighAccuracy = true })
        return positionChannel.receive()
    }

    fun watchPosition(callback: (GeolocationPosition) -> Unit): Watcher {
        val id = navigator.geolocation.watchPosition(
            callback,
            options = jso { enableHighAccuracy = true })
        return Watcher(id)
    }

    class Watcher(private val id: GeolocationWatchId) {
        fun release() {
            navigator.geolocation.clearWatch(id)
        }
    }
}