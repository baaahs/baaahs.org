package org.baaahs.blocks.blog

import csstype.AlignItems
import csstype.Auto
import csstype.Color
import csstype.ColorProperty
import csstype.Display
import csstype.FlexDirection
import csstype.GeometryPosition
import csstype.JustifyContent
import csstype.None
import csstype.ObjectFit
import csstype.Position
import csstype.TransformOrigin
import csstype.Transition
import csstype.TransitionProperty
import csstype.TransitionTimingFunction
import csstype.brightness
import csstype.pct
import csstype.px
import csstype.s
import csstype.scale
import csstype.translatey
import mui.material.Avatar
import mui.material.Box
import mui.material.Card
import mui.material.CardContent
import mui.material.Chip
import mui.material.Container
import mui.material.Divider
import mui.material.PaletteMode
import mui.material.Typography
import mui.material.styles.Theme
import mui.material.styles.TypographyVariant
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.util.breakpoints
import org.baaahs.util.marginY
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.ReactNode
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.img
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg

data class BlogPost(
    val image: String,
    val description: String,
    val title: String,
    val author: Author,
    val date: String
)

data class Author(
    val name: String,
    val avatar: String
)

val mock = BlogPost(
    image = "https://assets.maccarianagency.com/backgrounds/img4.jpg",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    title = "Labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author = Author(
        name = "Chary Smith",
        avatar = "https://assets.maccarianagency.com/avatars/img6.jpg",
    ),
    date = "22 Nov",
)

val HorizontallyAlignedBlogCardWithShapedImage =
    FC<HorizontallyAlignedBlogCardWithShapedImageProps> {
        val theme = useTheme<Theme>()

        Container {
            Box {
                useComponent(a) {
                    href = ""
                }
                sx {
                    display = Display.block
                    width = 1.sp
                    height = 1.sp
                    textDecoration = None.none
                    transition =
                        Transition(TransitionProperty.all, .2.s, TransitionTimingFunction.easeInOut)
                    "&:hover" {
                        transform = translatey(theme.spacing(-1 / 2))

                    }


                }

                Box {
                    component = Card
                    sx {
                        width = 1.sp
                        height = 1.sp
                        boxShadow = 4.sp
                        display = Display.flex
                        flexDirection = breakpoints {
                            xs = FlexDirection.column
                            md = FlexDirection.rowReverse
                        }
                        backgroundImage = None.none
                    }

                    Box {
                        sx {
                            width = breakpoints { xs = 1.sp; md = 50.pct }
                            position = Position.relative
                            display = Display.flex
                        }

                        Box {
                            useComponent(img) {
                                height = 1.sp
                                width = 1.sp
                                src = mock.image
                                alt = "..."
                            }
                            sx {
                                objectFit = ObjectFit.cover
                                maxHeight = 360.px
                                filter =
                                    if (theme.palette.mode == PaletteMode.dark) brightness(0.7) else None.none
                            }
                        }
                        Chip {
                            label = ReactNode("Featured")
                            sx {
                                position = Position.absolute
                                top = 20.px
                                right = 20.px
                                backgroundColor = Color("background.paper")
                            }
                        }
                        Box {
                            useComponent(svg) {
                                viewBox = "0 0 112 690"
                                fill = "none"
                                xmlns = "http://www.w3.org/2000/svg"
                            }
                            sx {
                                position = Position.absolute
                                bottom = 0.px
                                top = (-50).pct
                                left = 0.px
                                right = 0.px
                                color = theme.palette.background.paper as ColorProperty
                                transform = scale(2)
                                height = 1.px
                                width = Auto.auto
                                transformOrigin =
                                    TransformOrigin(GeometryPosition.top, GeometryPosition.center)
                                display = breakpoints { xs = None.none; md = Display.block }
                            }

                            path {
                                d = "M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                                fill = "currentColor"
                            }
                        }
                    }
                    CardContent {
                        sx {
                            position = Position.relative
                            width = breakpoints { xs = 1.sp; md = 50.pct }
                            padding = 4.sp
                            display = Display.flex
                            flexDirection = FlexDirection.column
                            justifyContent = JustifyContent.spaceBetween
                        }

                        Box {
                            Typography {
                                variant = TypographyVariant.h5
                                gutterBottom = true
                                +mock.title
                            }
                            Typography {
                                sx { color = Color("text.secondary") }
                                +mock.description
                            }
                        }
                        Box {
                            Divider {
                                sx { marginY = 2.sp }
                            }

                            Box {
                                sx {
                                    display = Display.flex
                                    justifyContent = JustifyContent.spaceBetween
                                    alignItems = AlignItems.center
                                }
                                Box {
                                    sx {
                                        display = Display.flex
                                        alignItems = AlignItems.center
                                    }
                                    Avatar {
                                        src = mock.author.avatar
                                        sx { marginRight = 1.sp }
                                    }
                                    Typography {
                                        sx { color = Color("text.secondary") }
                                        mock.author.name
                                    }
                                }
                                Typography {
                                    sx { color = Color("text.secondary") }
                                    mock.date
                                }
                            }
                        }
                    }
                }
            }
        }
    }

external interface HorizontallyAlignedBlogCardWithShapedImageProps : Props {}