package org.baaahs.assman.model

import assertk.assertThat
import assertk.assertions.isEqualTo
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
    }
})


inline fun <reified T> GroupBody.describe(skip: Skip = Skip.No, noinline body: Suite.() -> Unit) {
    describe(T::class.toString(), skip, body)
}
