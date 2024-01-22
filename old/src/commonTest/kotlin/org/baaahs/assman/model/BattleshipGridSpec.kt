package org.baaahs.assman.model

import assertk.assertThat
import assertk.assertions.isEqualTo
import assertk.assertions.isFalse
import assertk.assertions.isTrue
import org.spekframework.spek2.Spek
import org.spekframework.spek2.dsl.GroupBody
import org.spekframework.spek2.dsl.Skip
import org.spekframework.spek2.style.specification.Suite
import org.spekframework.spek2.style.specification.describe

object BattleshipGridSpec : Spek({
    describe<BattleshipGrid> {
        val battleshipGrid by value {
            BattleshipGrid(
                LatLong(20.0, -20.0),
                LatLong(10.0, -10.0)
            )
        }

        describe("toCoord") {
            it("computes the coordinate from position") {
                assertThat(battleshipGrid.toCoord(.2 to .8))
                    .isEqualTo("C8A0")
            }

            it("computes the coordinate from position, double precision") {
                assertThat(battleshipGrid.toCoord(.25 to .55))
                    .isEqualTo("C5F5")
            }

            it("computes the coordinate from lat/long") {
                assertThat(battleshipGrid.toCoord(LatLong(12.0, -18.0)))
                    .isEqualTo("C8A0")
            }

            it("computes the coordinate from lat/long, double precision") {
                assertThat(battleshipGrid.toCoord(LatLong(14.5, -17.5)))
                    .isEqualTo("C5F5")
            }

            it("indicates out of bounds") {
                assertThat(battleshipGrid.isOutOfBounds(.2 to .8))
                    .isFalse()
                assertThat(battleshipGrid.isOutOfBounds(LatLong(12.0, -18.0)))
                    .isFalse()
            }

            context("when outside the grid") {
                it("wraps around (under)") {
                    assertThat(battleshipGrid.toCoord(-.8 to -1.2))
                        .isEqualTo("C8A0")
                }

                it("\"wraps around (over)\"") {
                    assertThat(battleshipGrid.toCoord(1.2 to 2.8))
                        .isEqualTo("C8A0")
                }

                it("indicates out of bounds") {
                    assertThat(battleshipGrid.isOutOfBounds(-.8 to -1.2))
                        .isTrue()
                    assertThat(battleshipGrid.isOutOfBounds(LatLong(22.0, -8.0)))
                        .isTrue()
                }
            }
        }

        describe("coordToPosition") {
            it("computes the location from coordinate") {
                assertThat(battleshipGrid.toPosition("C8"))
                    .isEqualTo(.2 to .8)
            }

            it("computes the location from coordinate, double precision") {
                assertThat(battleshipGrid.toPosition("C5F5"))
                    .isEqualTo(.25 to .55)
            }
        }

        describe("coordToLatLong") {
            it("computes the location from coordinate") {
                assertThat(battleshipGrid.toLatLong("C8"))
                    .isEqualTo(LatLong(12.0, -18.0))
            }

            it("computes the location from coordinate, double precision") {
                assertThat(battleshipGrid.toLatLong("C5F5"))
                    .isEqualTo(LatLong(14.5, -17.5))
            }

            context("of southeast corner") {
                it("computes the location from coordinate") {
                    assertThat(battleshipGrid.toLatLong("C8", true))
                        .isEqualTo(LatLong(11.0, -17.0))
                }

                it("computes the location from coordinate, double precision") {
                    assertThat(battleshipGrid.toLatLong("C5F5", true))
                        .isEqualTo(LatLong(14.399999999999999, -17.4))
                }
            }
        }

        describe("gridDimensions") {
            value(battleshipGrid) {
                val inclineA0 = LatLong(39.375943, -123.094508)
                val inclineK10 = LatLong(39.368254, -123.085697)
                BattleshipGrid(inclineA0, inclineK10)
            }

            context("of full grid") {
                it("returns dimensions in meters based on the north/south median") {
                    assertThat(
                        battleshipGrid.gridDimensions()
                            .let { (x, y) -> x.toImperial() to y.toImperial() }
                    ).isEqualTo("2484ft 10in" to "2805ft")
                }
            }
        }
    }
})


inline fun <reified T> GroupBody.describe(skip: Skip = Skip.No, noinline body: Suite.() -> Unit) {
    describe(T::class.toString(), skip, body)
}
