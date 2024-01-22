package org.baaahs.views.index.components

import csstype.AlignItems
import csstype.Auto
import csstype.BackgroundColor
import csstype.BackgroundImage
import csstype.BackgroundRepeat
import csstype.ClassName
import csstype.Color
import csstype.Display
import csstype.FlexDirection
import csstype.FontFamily
import csstype.FontStyle
import csstype.None
import csstype.Position
import csstype.TextDecoration
import csstype.deg
import csstype.dropShadow
import csstype.em
import csstype.integer
import csstype.pct
import csstype.px
import csstype.rem
import csstype.rotate
import csstype.translate3d
import emotion.react.css
import externals.mui.material.styles.alpha
import js.core.ArrayLike
import js.core.asList
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
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.PropsWithChildren
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.span
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import web.dom.document
import web.html.Loading

data class Image(val cover: String, val coverDark: String)

private external interface HoverableLetter : PropsWithChildren {
    var letterSelector: String
}

private val hoverableLetter = FC<HoverableLetter> { props ->
    span {
        onMouseOver = {
            document.querySelectorAll(props.letterSelector).forEach {
                it.classList.add("baaahs-letter-active")
            }
            console.log("Select " + props.letterSelector)
        }
        onMouseOut = {
            document.querySelectorAll(props.letterSelector).forEach {
                it.classList.remove("baaahs-letter-active")
            }
            console.log("Deselect " + props.letterSelector)
        }
        +props.children
    }
}

val imageGroups = listOf(
    listOf(
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img1.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png"
        ),
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img4.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png"
        )
    ),
    listOf(
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img13.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png"
        ),
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img10.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png"
        ),
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img7.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png"
        )
    ),
    listOf(
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img6.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png"
        ),
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img24.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png"
        ),
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img17.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png"
        ),
        Image(
            "https://assets.maccarianagency.com/screenshots/the-front/img12.png",
            "https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png"
        )
    )
)

val Hero = FC<Props> {
    val theme = useTheme<Theme>()
    val isMd = useMediaQuery(theme.breakpoints.up(Breakpoint.md), jso {
        defaultMatches = true
    })

    Box {
        sx {
            backgroundImage =
                "linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0)}, ${
                    alpha(
                        theme.palette.asDynamic().alternate.main,
                        1
                    )
                } 100%)" as BackgroundImage
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
                id = "hero"

                Box {
                    sx { maxWidth = breakpoints { xs = 1.sp; sm = 50.pct } }

                    Typography {
                        variant = TypographyVariant.h2
                        gutterBottom = true
                        sx {
                            fontSize = breakpoints {
                                xs = 4.5.rem; sm = 4.5.rem; md = 4.5.rem; lg = 5.75.rem; xl = 5.75.rem
                            }
                            color = Color("text.primary")
                            fontFamily = "Smooth Circulars" as FontFamily
                        }

                        hoverableLetter { letterSelector = ".baaahs-letter-b"; +"B" }
                        hoverableLetter { letterSelector = ".baaahs-letter-a1"; +"A" }
                        hoverableLetter { letterSelector = ".baaahs-letter-a2"; +"A" }
                        hoverableLetter { letterSelector = ".baaahs-letter-a3"; +"A" }
                        hoverableLetter { letterSelector = ".baaahs-letter-h"; +"H" }
                        hoverableLetter { letterSelector = ".baaahs-letter-s"; +"S" }
                    }

                    Typography {
                        variant = TypographyVariant.h3
                        gutterBottom = true
                        sx {
                            fontSize = breakpoints {
                                xs = 0.85.rem; sm = 0.85.rem; md = 0.85.rem; lg = 0.85.rem; xl = 0.85.rem
                            }
                            color = Color("text.primary")
                            fontFamily = "Smooth Circulars" as FontFamily
                            marginTop = (-20).px

                            "& .baaahs-letter-active" {
                                textDecoration = TextDecoration.underline
                                filter = dropShadow(0.px, 0.px, 1.em)
                            }
                        }

                        span { css(ClassName("baaahs-letter-b")) {}; +"Big" }
                        +"-"
                        span { css(ClassName("baaahs-letter-a1")) {}; +"Ass" }
                        +" "
                        span { css(ClassName("baaahs-letter-a2")) {}; +"Amazingly" }
                        +" "
                        span { css(ClassName("baaahs-letter-a3")) {}; +"Awesome" }
                        +" "
                        span { css(ClassName("baaahs-letter-h")) {}; +"Homosexual" }
                        +" "
                        span { css(ClassName("baaahs-letter-s")) {}; +"Sheep" }
                    }

                    Typography {
                        variant = TypographyVariant.h6
                        useComponent(p)
                        sx {
                            color = Color("text.secondary")
                            fontWeight = integer(400)

                            "& .baaahs-letter-active" {
                                fontStyle = FontStyle.italic
                                textDecoration = TextDecoration.underline
                            }
                        }

                        +"BAAAHS (the "
                        span { css(ClassName("baaahs-letter-b")) {}; +"Big" }
                        +"-"
                        span { css(ClassName("baaahs-letter-a1")) {}; +"Ass" }
                        +" "
                        span { css(ClassName("baaahs-letter-a2")) {}; +"Amazingly" }
                        +" "
                        span { css(ClassName("baaahs-letter-a3")) {}; +"Awesome" }
                        +" "
                        span { css(ClassName("baaahs-letter-h")) {}; +"Homosexual" }
                        +" "
                        span { css(ClassName("baaahs-letter-s")) {}; +"Sheep" }
                        +") is a mutant vehicle, a mobile disco, and a penetrable social statement."
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
                            useComponent(a)
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
                                useComponent(a)
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
                                        useComponent(img) {
                                            loading = Loading.lazy
                                            src =
                                                if (theme.palette.mode == PaletteMode.dark) image.coverDark else image.cover
                                        }
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
            useComponent(svg) {
                preserveAspectRatio = "none"
                xmlns = "http://www.w3.org/2000/svg"
                x = 0.0
                y = 0.0
                viewBox = "0 0 1920 100.1"
            }
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

fun <T> ArrayLike<T>.forEach(block: (T) -> Unit) = asList().forEach { block(it) }
