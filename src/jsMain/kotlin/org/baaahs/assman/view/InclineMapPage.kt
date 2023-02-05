package org.baaahs.assman.view

import csstype.FontSize
import mui.material.Button
import mui.material.ButtonGroup
import mui.material.ButtonGroupVariant
import mui.material.Card
import mui.material.CardContent
import mui.material.CircularProgress
import mui.material.CircularProgressVariant
import mui.material.Size
import mui.material.Table
import mui.material.TableBody
import mui.material.TableCell
import mui.material.TableCellVariant
import mui.material.TableContainer
import mui.material.TableRow
import mui.material.Typography
import mui.material.styles.Theme
import mui.material.styles.TypographyVariant
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.assman.model.BattleshipGrid
import org.baaahs.assman.model.LatLong
import org.baaahs.assman.model.toImperial
import react.FC
import react.Props
import react.useEffectOnce
import react.useMemo
import react.useState
import web.geolocation.GeolocationPosition
import kotlin.math.roundToInt

data class GridOption(
    val title: String,
    val battleshipGrid: BattleshipGrid
)

val inclineA0 = LatLong(39.375943, -123.094508)
val inclineK10 = LatLong(39.368254, -123.085697)

val a10Coord = LatLong(39.37175, -123.08760)
val k0Coord = LatLong(39.37074, -123.08622)

val gridOptions = listOf(
    GridOption("Campground One", BattleshipGrid(a10Coord, k0Coord, depth = 1)),
    GridOption("The Incline (10x10)", BattleshipGrid(inclineA0, inclineK10)),
    GridOption(
        "The Incline (A-Z)", BattleshipGrid(
            inclineA0, inclineK10,
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "12345678901234567890123456", 1
        )
    )
)

val InclineMapPage = FC<Props> {
    val geoLocator = useMemo { GeoLocator() }
    var position by useState<GeolocationPosition?> { null }
    useEffectOnce {
        val watcher = geoLocator.watchPosition { position = it }
        cleanup { watcher.release() }
    }
//    scope.launch { position = geoLocator.getCurrentPosition() }

    var gridOption by useState { gridOptions[0] }
    val grid = gridOption.battleshipGrid

    ButtonGroup {
        variant = ButtonGroupVariant.contained

        gridOptions.forEach { option ->
            Button {
                disabled = gridOption == option
                onClick = { gridOption = option }
                +option.title
            }
        }
    }

//    <Card sx={{ minWidth: 275 }}>
//    <CardContent>
//    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//    Word of the Day
//    </Typography>
//    <Typography variant="h5" component="div">
//    be{bull}nev{bull}o{bull}lent
//    </Typography>
//    <Typography sx={{ mb: 1.5 }} color="text.secondary">
//    adjective
//    </Typography>
//    <Typography variant="body2">
//    well meaning and kindly.
//    <br />
//    {'"a benevolent smile"'}
//    </Typography>
//    </CardContent>
//    <CardActions>
//    <Button size="small">Learn More</Button>
//    </CardActions>
//    </Card>

    val theme = useTheme<Theme>()

    Card {
        CardContent {
            Typography {
                sx { fontSize = FontSize.small }
                +"Battleship Coords"
            }

            position?.let {
                val coords = it.coords
                val latLong = LatLong(coords.latitude, coords.longitude)
                Typography {
                    variant = TypographyVariant.h1
                    sx {
                        color = if (grid.isOutOfBounds(latLong))
                            theme.palette.error.main else theme.palette.text.primary
                    }
                    +grid.toCoord(latLong)
                }

                TableContainer {
                    Table {
                        size = Size.small

                        TableBody {
                            TableRow {
                                TableCell { variant = TableCellVariant.head; +"Latitude:" }
                                TableCell { +coords.latitude.pretty() }
                                TableCell { variant = TableCellVariant.head; +"Longitude:" }
                                TableCell { +coords.longitude.pretty() }
                            }
                            TableRow {
                                TableCell { variant = TableCellVariant.head; +"Altitude:" }
                                TableCell { +(coords.altitude?.pretty() ?: "—") }
                                TableCell { variant = TableCellVariant.head; +"Heading:" }
                                TableCell { +(coords.heading?.pretty() ?: "—") }
                            }
                            TableRow {
                                TableCell {
                                    variant = TableCellVariant.head; +"Battleship Position:"
                                }
                                TableCell {
                                    +grid.toPosition(latLong)
                                        .let { (x, y) -> "${x.pretty()},${y.pretty()}" }
                                }
                                TableCell { variant = TableCellVariant.head; +"Grid Size:" }
                                TableCell { +grid.gridDimensions().toImperial() }
                            }
                        }
                    }
                }
            } ?: CircularProgress {
                variant = CircularProgressVariant.indeterminate
            }
        }
    }
}

private fun Double.pretty() = ((this * 100).roundToInt() / 100.0).toString()
private fun Pair<Double, Double>.pretty() = first.pretty() to second.pretty()


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
