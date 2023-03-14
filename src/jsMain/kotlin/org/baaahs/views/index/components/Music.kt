package org.baaahs.views.index.components

import csstype.Color
import csstype.ColorProperty
import csstype.Display
import csstype.FlexDirection
import csstype.integer
import csstype.px
import mui.material.Avatar
import mui.material.Box
import mui.material.Card
import mui.material.Grid
import mui.material.Typography
import mui.material.styles.Theme
import mui.material.styles.TypographyVariant
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.util.breakpoints
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.ChildrenBuilder
import react.FC
import react.Props
import react.dom.html.ReactHTML.img
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import react.dom.svg.StrokeLinecap
import react.dom.svg.StrokeLinejoin

data class MusicPost(
    val title: String,
    val subtitle: String,
    val icon: ChildrenBuilder.() -> Unit
)

val mock = listOf(
    MusicPost(
        title = "Kelly Naughton",
        subtitle = "Burn Night On BAAAHS 20222",
        icon = {
            img {
                src = "https://i1.sndcdn.com/artworks-qMmrzwDgfmiFiRle-7yAqwQ-t500x500.jpg"
            }
        },
    ),
    MusicPost(
        title = "Light and dark UI",
        subtitle =
        "Optimized for multiple color modes. Use light or dark, your choice.",
        icon = {
            svg {
                height = 24.0
                width = 24.0
                xmlns = "http://www.w3.org/2000/svg"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor"
                path {
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round
                    strokeWidth = 2.0
                    d =
                        "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                }
            }
        },
    ),
    MusicPost(
        title = "Composable",
        subtitle =
        "Designed with composition in mind. Compose new components with ease.",
        icon = {
            svg {
                height = 24.0
                width = 24.0
                xmlns = "http://www.w3.org/2000/svg"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor"
                path {
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round
                    strokeWidth = 2.0
                    d =
                        "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                }
            }
        },
    ),
    MusicPost(
        title = "Developer experience",
        subtitle =
        "Guaranteed to boost your productivity when building your app or website.",
        icon = {
            svg {
                height = 24.0
                width = 24.0
                xmlns = "http://www.w3.org/2000/svg"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor"
                path {
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round
                    strokeWidth = 2.0
                    d = "M13 10V3L4 14h7v7l9-11h-7z"
                }
            }
        },
    ),
    MusicPost(
        title = "Continuous updates",
        subtitle = "We continually deploy improvements and new updates to theFront.",
        icon = {
            svg {
                height = 24.0
                width = 24.0
                xmlns = "http://www.w3.org/2000/svg"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor"
                path {
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round
                    strokeWidth = 2.0
                    d =
                        "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                }
            }
        },
    ),
    MusicPost(
        title = "Free support",
        subtitle =
        "6 months of free technical support to help you build your website faster.",
        icon = {
            svg {
                height = 24.0
                width = 24.0
                xmlns = "http://www.w3.org/2000/svg"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor"
                path {
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round
                    strokeWidth = 2.0
                    d =
                        "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                }
            }
        }
    )
)

val Music = FC<MusicProps> {
    val theme = useTheme<Theme>()

    Grid {
        container = true
        spacing = 4.sp
        mock.forEachIndexed { i, item ->
            Grid {
                this.item = true
                breakpoints<Number> {
                    xs = 12
                    sm = 6
                    md = 4
                }
                key = i.toString()
                Box {
                    useComponent(Card)
                    sx {
                        padding = 4.sp
                        borderRadius = 2.sp
                        width = 1.sp
                        height = 1.sp
                    }

                    this.asDynamic()["data-aos"] = "fade-up"
                    this.asDynamic()["data-aos-delay"] = i * 100

                    Box {
                        sx {
                            display = Display.flex
                            flexDirection = FlexDirection.column
                        }
                        Box {
                            useComponent(Avatar)
                            sx {
                                width = 200.px
                                height = 200.px
                                marginBottom = 2.sp
                                backgroundColor = theme.palette.primary.main
                                color = theme.palette.background.paper as ColorProperty
                            }
                            item.icon.invoke(this)
                        }
                        Typography {
                            variant = TypographyVariant.h6
                            gutterBottom = true
                            sx {
                                fontWeight = integer(500)

                            }

                            item.title
                        }
                        Typography {
                            sx {
                                color = Color("text.secondary")
                            }
                            item.subtitle
                        }
                    }
                }
            }
        }
    }

}

external interface MusicProps : Props {}
