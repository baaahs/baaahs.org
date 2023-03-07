package org.baaahs.views.index.components

import csstype.AlignItems
import csstype.Auto
import csstype.BackgroundColor
import csstype.BackgroundImage
import csstype.BackgroundRepeat
import csstype.Color
import csstype.Display
import csstype.FlexDirection
import csstype.None
import csstype.Position
import csstype.deg
import csstype.integer
import csstype.pct
import csstype.px
import csstype.rem
import csstype.rotate
import csstype.translate3d
import externals.mui.material.styles.alpha
import js.core.jso
import mui.material.Box
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Container
import mui.material.PaletteMode
import mui.material.Size
import mui.material.Typography
import mui.material.styles.Theme
import mui.material.styles.TypographyVariant
import mui.material.styles.useTheme
import mui.material.useMediaQuery
import mui.system.Breakpoint
import mui.system.sx
import org.baaahs.util.breakpoints
import org.baaahs.util.marginX
import org.baaahs.util.paddingY
import org.baaahs.util.sp
import react.FC
import react.Props
import react.dom.html.ImgHTMLAttributes
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import react.dom.svg.SVGAttributes
import web.html.HTMLImageElement
import web.html.Loading
import web.svg.SVGSVGElement

data class Image(val cover: String, val coverDark: String)

val imageGroups = listOf(
    listOf(
        Image("https://assets.maccarianagency.com/screenshots/the-front/img1.png", "https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png"),
        Image("https://assets.maccarianagency.com/screenshots/the-front/img4.png", "https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png")
    ),
    listOf(
        Image("https://assets.maccarianagency.com/screenshots/the-front/img13.png", "https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png"),
        Image("https://assets.maccarianagency.com/screenshots/the-front/img10.png", "https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png"),
        Image("https://assets.maccarianagency.com/screenshots/the-front/img7.png", "https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png")
    ),
    listOf(
        Image("https://assets.maccarianagency.com/screenshots/the-front/img6.png", "https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png"),
        Image("https://assets.maccarianagency.com/screenshots/the-front/img24.png", "https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png"),
        Image("https://assets.maccarianagency.com/screenshots/the-front/img17.png", "https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png"),
        Image("https://assets.maccarianagency.com/screenshots/the-front/img12.png", "https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png")
    )
)

val Hero = FC<Props> {
    val theme = useTheme<Theme>()
    val isMd = useMediaQuery(theme.breakpoints.up(Breakpoint.md), jso {
        defaultMatches = true
    })

    +"Hero!"
    Box {
        sx {
            backgroundImage =
                "linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0)}, ${alpha(theme.palette.asDynamic().alternate.main, 1)} 100%)" as BackgroundImage
            backgroundRepeat = BackgroundRepeat.repeatX
            position = Position.relative

        }

        Box {
            sx {
                paddingY = breakpoints {
                    xs = 0.sp
                    sm = 4.rem
                    md = 8.rem
                }
            }

            Container {
                Box {
                    sx { maxWidth = breakpoints { xs = 1.sp; sm = 50.pct } }

                    Typography {
                        variant = TypographyVariant.h2
                        gutterBottom = true
                        sx {
                            color = Color("text.primary")
                            fontWeight = integer(700)
                        }

                        +"BAAAHS"
                    }
                    Typography {
                        variant = TypographyVariant.h6
                        component = p
                        sx {
                            color = Color("text.secondary")
                            fontWeight = integer(400)
                        }

                        +"BAAAHS (the Big Ass Amazingly Awesome Homosexual Sheep) is a mutant vehicle, a mobile disco, and a penetrable social statement."
                    }
                    Box {
                        sx {
                            display = Display.flex
                            flexDirection = breakpoints {
                                xs = FlexDirection.column
                                sm = FlexDirection.row
                            }
                            alignItems = breakpoints {
                                xs = AlignItems.stretch
                                sm = AlignItems.flexStart
                            }
                            marginTop = 4.sp
                        }

                        Button {
                            asDynamic().component = a
                            variant = ButtonVariant.contained
                            color = ButtonColor.primary
                            size = Size.large
                            fullWidth = if (isMd) false else true
                            href = "/crew"
                            +"Join the flock"
                        }
                        Box {
                            sx {
                                marginTop = breakpoints { xs = 2.sp; sm = 0.sp }
                                marginLeft = breakpoints { sm = 2.sp }
                                width = breakpoints { xs = 100.pct; md = Auto.auto }
                            }

                            Button {
                                asDynamic().component = a
                                href = "/about"
                                variant = ButtonVariant.outlined
                                color = ButtonColor.primary
                                size = Size.large
                                fullWidth = !isMd
                                +"Learn more"
                            }
                        }
                    }
                }
            }
            Box {
                sx {
                    transform = rotate((-20).deg)
                    display = breakpoints { xs = None.none; sm = Display.block }
                }

                Box {
                    sx {
                        display = Display.flex
                        width = 50.rem
                        left = 50.pct
                        top = 0.px
                        position = Position.absolute
                        transform = translate3d(20.pct, (-50).pct, 0.pct)

                    }

                    imageGroups.forEachIndexed { i, images ->
                        Box {
                            key = i.toString()
                            sx {
                                marginTop = breakpoints { sm = (-i * 16).sp }
                                marginX = 1.sp
                            }

                            images.forEachIndexed { j, image ->
                                Box {
                                    key = j.toString()
                                    sx {
                                        padding = 1.sp
                                        backgroundColor = "background.paper" as BackgroundColor
                                        borderRadius = 2.sp
                                        boxShadow = 3.sp
                                        marginTop = 2.sp
                                    }

                                    Box {
                                        component = img; this as ImgHTMLAttributes<HTMLImageElement>
                                        loading = Loading.lazy
                                        src =
                                            if (theme.palette.mode == PaletteMode.dark) image.coverDark else image.cover
                                        sx {
                                            height = 1.sp
                                            width = 1.sp
                                            maxWidth = 320.px
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        Box {
            component = svg; this as SVGAttributes<SVGSVGElement>
            preserveAspectRatio = "none"
            xmlns = "http://www.w3.org/2000/svg"
            x = 0.0
            y = 0.0
            viewBox = "0 0 1920 100.1"
            sx {
                width = 100.pct

                marginBottom = theme.spacing(-1)

            }

            path {
                fill = theme.palette.background.paper
                d = "M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            }
        }
    }
}