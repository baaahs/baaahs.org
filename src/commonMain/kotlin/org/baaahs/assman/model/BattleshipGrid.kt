package org.baaahs.assman.model

import kotlin.math.sqrt

data class BattleshipGrid(
    val northwestCorner: LatLong,
    val southeastCorner: LatLong,
    val horizontalCells: String = "ABCDEFGHIJ",
    val verticalCells: String = "0123456789",
    val depth: Int = 2
) {
    private val delta = southeastCorner - northwestCorner

    fun toLatLong(coordinate: String, ofSoutheastCorner: Boolean = false): LatLong {
        return toPosition(coordinate, ofSoutheastCorner).let { (x, y) ->
            northwestCorner + LatLong(delta.latitude * y, delta.longitude * x)
        }
    }

    fun toPosition(latLong: LatLong): Pair<Double, Double> =
        (latLong - northwestCorner).let {
            it.longitude / delta.longitude to it.latitude / delta.latitude
        }

    fun toPosition(coordinate: String, ofSoutheastCorner: Boolean = false): Pair<Double, Double> {
        if (coordinate.length % 2 != 0)
            error("coordinate must have an even number of characters")

        var x = 0.0
        var y = 0.0
        var xRes = 1.0
        var yRes = 1.0

        for (i in 0 until coordinate.length / 2) {
            xRes /= horizontalCells.length
            val xChar = coordinate[i * 2]
            val xPos = horizontalCells.indexOf(xChar)
            if (xPos == -1) error("unknown X coordinate '$xChar'")
            x += xPos * xRes

            yRes /= verticalCells.length
            val yChar = coordinate[i * 2 + 1]
            val yPos = verticalCells.indexOf(yChar)
            if (yPos == -1) error("unknown Y coordinate '$yChar'")
            y += yPos * yRes
        }

        if (ofSoutheastCorner) {
            x += xRes
            y += yRes
        }

        return x to y
    }

    fun toCoord(position: Pair<Double, Double>, depth: Int = this.depth): String {
        var (xPos, yPos) = position

        xPos %= 1.0
        if (xPos < 0) xPos = 1 - xPos

        yPos %= 1.0
        if (yPos < 0) yPos = 1 - yPos

        return buildString {
            for (level in 0 until depth) {
                val xIndex =
                    (xPos * horizontalCells.length + 0.00000001).toInt() % horizontalCells.length
                xPos -= xIndex.toDouble() / horizontalCells.length
                xPos *= horizontalCells.length
                append(horizontalCells[xIndex])
//                append(".${xIndex}/")

                val yIndex =
                    (yPos * verticalCells.length + 0.00000001).toInt() % verticalCells.length
                yPos -= yIndex.toDouble() / verticalCells.length
                yPos *= verticalCells.length
                append(verticalCells[yIndex])
//                append(".${yIndex}/")
            }
        }
    }

    fun toCoord(latLong: LatLong, depth: Int = this.depth): String =
        toCoord(toPosition(latLong), depth)

    fun isOutOfBounds(pair: Pair<Double, Double>): Boolean =
        with(pair) { first < 0 || first > 1 || second < 0 || second > 1 }

    fun isOutOfBounds(latLong: LatLong): Boolean =
        isOutOfBounds(toPosition(latLong))

    /** Returns dimensions of the grid in meters. */
    fun gridDimensions(): Pair<Double, Double> {
        val northeastCorner = northwestCorner.copy(longitude = southeastCorner.longitude)
        val southwestCorner = northwestCorner.copy(latitude = southeastCorner.latitude)

        val northHorizontalDistance = northwestCorner.distanceTo(northeastCorner)
        val southHorizontalDistance = southwestCorner.distanceTo(southeastCorner)

        val verticalDistance = northwestCorner.distanceTo(southwestCorner)

        val hypotenuse = northwestCorner.distanceTo(southeastCorner)
//        println("northHorizontalDistance = ${northHorizontalDistance.toImperial()}")
//        println("southHorizontalDistance = ${southHorizontalDistance.toImperial()}")
//        println("verticalDistance = ${verticalDistance.toImperial()}")
//        println("hypotenuse = ${hypotenuse.toImperial()}")
        val sideDistance = sqrt(hypotenuse * hypotenuse / 2)
//        println("sideDistance = ${sideDistance.toImperial()}")
//        println("Area by hypotenuse: ${(sideDistance * sideDistance).toImperial(true)}")
//        println("Area by northern edge: ${(northHorizontalDistance * verticalDistance).toImperial(true)}")
//        println("Area by southern edge: ${(southHorizontalDistance * verticalDistance).toImperial(true)}")
        return (northHorizontalDistance + southHorizontalDistance) / 2 to verticalDistance
    }
}
