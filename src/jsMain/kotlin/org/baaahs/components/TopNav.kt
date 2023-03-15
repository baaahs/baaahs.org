package org.baaahs.components

import csstype.AlignItems
import csstype.Color
import csstype.Display
import csstype.JustifyContent
import mui.material.Box
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.sx
import org.baaahs.util.breakpoints
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.dom.html.ReactHTML.a

val TopNav = FC<TopNavProps> { props ->
    val colorInvert = props.colorInvert ?: false
    Box {
        sx {
            display = Display.flex
            justifyContent = JustifyContent.flexEnd
            alignItems = AlignItems.center
        }
        Box {
            sx { marginRight = breakpoints { xs = 1.sp; sm = 2.sp } }

            Link {
                underline = LinkUnderline.none
                useComponent(a)
                href = "/demos"
                color = if (colorInvert) "common.white" else "text.primary"
                sx { display = Display.flex; alignItems = AlignItems.center }

                +"Demos"

                Box {
                    sx {
                        padding = 0.5.sp
                        display = Display.inlineFlex
                        borderRadius = 1.sp
                        backgroundColor = Color("primary.main")
                        marginLeft = 1.sp
                    }
                    Typography {
                        variant = TypographyVariant.caption
                        sx { color = Color("common.white"); lineHeight = 1.sp }
                        +"new"
                    }
                }
            }
        }
        Box {
            sx {
                marginRight = breakpoints { xs = 1.sp; sm = 2.sp }
            }

            Link {
                underline = LinkUnderline.none
                useComponent(a)
                href = "/blocks"
                color = if (colorInvert) "common.white" else "text.primary"
                sx { display = Display.flex; alignItems = AlignItems.center }

                +"Components"
            }
        }
        Box {
            sx {
                marginRight = breakpoints { xs = 1.sp; sm = 2.sp }
            }

            Link {
                underline = LinkUnderline.none
                useComponent(a)
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