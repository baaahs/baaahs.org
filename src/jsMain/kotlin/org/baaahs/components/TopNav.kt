package org.baaahs.components

import csstype.AlignItems
import csstype.BorderRadius
import csstype.Color
import csstype.Display
import csstype.JustifyContent
import csstype.LineHeight
import csstype.MarginLeft
import csstype.Padding
import js.core.jso
import mui.material.Box
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.FC
import react.Props
import react.dom.html.ReactHTML.a

//import ThemeModeToggler from "components/ThemeModeToggler"

val TopNav = FC<TopNavProps> { props ->
    val colorInvert = props.colorInvert ?: false
    Box {
        sx {
            display = Display.flex
            justifyContent = JustifyContent.flexEnd
            alignItems = AlignItems.center
        }
        Box {
            sx {
                marginRight = jso<dynamic> { xs = "1"; sm = "2" }
            }

            Link {
                underline = LinkUnderline.none
                component = a
                href = "/demos"
                color = if (colorInvert) {
                    "common.white"
                } else {
                    "text.primary"
                }
                sx {
                    display = Display.flex
                    alignItems = AlignItems.center

                }

                +"Demos"
                Box {
                    sx {
                        padding = 0.5 as Padding
                        display = Display.inlineFlex
                        borderRadius = 1 as BorderRadius
                        backgroundColor = Color("primary.main")
                        marginLeft = 1 as MarginLeft
                    }
                    Typography {
                        variant = TypographyVariant.caption
                        sx {
                            color = Color("common.white")
                            lineHeight = 1 as LineHeight
                        }

                        +"new"
                    }
                }
            }
        }
        Box {
            sx {
                marginRight = jso<dynamic> { xs = "1"; sm = "2" }
            }

            Link {
                underline = LinkUnderline.none
                component = a
                href = "/blocks"
                color = if (colorInvert) "common.white" else "text.primary"
                sx {
                    display = Display.flex
                    alignItems = AlignItems.center
                }

                +"Components"
            }
        }
        Box {
            sx {
                marginRight = jso<dynamic> { xs = "1"; sm = "2" }
            }

            Link {
                underline = LinkUnderline.none
                component = a
                href = "/docs/introduction"
                color = if (colorInvert) "common.white" else "text.primary"
                +"Docs"
            }
        }
        Box {
            ThemeModeToggler { }
        }
    }
}

external interface TopNavProps : Props {
    var colorInvert: Boolean?
}