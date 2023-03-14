package org.baaahs.layouts.main.components

import csstype.AlignItems
import csstype.Color
import csstype.Display
import csstype.FlexDirection
import csstype.FlexWrap
import csstype.JustifyContent
import csstype.px
import mui.material.Box
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Grid
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.PaletteMode
import mui.material.Size
import mui.material.Typography
import mui.material.TypographyAlign
import mui.material.styles.Theme
import mui.material.styles.TypographyVariant
import mui.material.styles.useTheme
import mui.system.responsive
import mui.system.sx
import org.baaahs.util.breakpoints
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import web.window.WindowTarget

val Footer = FC<FooterProps> {
    val theme = useTheme<Theme>()
    val mode = theme.palette.mode

    Grid {
        container = true
        spacing = 2.sp
        Grid {
            item = true
            columns = breakpoints { xs = responsive(12) }
            Box {
                sx {
                    display = Display.flex
                    justifyContent = JustifyContent.spaceBetween
                    alignItems = AlignItems.center
                    width = 1.sp
                    flexDirection =
                        breakpoints { xs = FlexDirection.column; sm = FlexDirection.row }
                }

                Box {
                    sx {
                        display = Display.flex
                        width = 100.px
                    }
                    useComponent(a) {
                        href = "/"
                        title = "theFront"
                    }
                    Box {
                        useComponent(img) {
                            src = if (mode == PaletteMode.light) {
                                "/images/baaahs-logo.svg"
                            } else {
                                "/images/baaahs-logo.svg"
                            }
                            height = 1.sp
                            width = 1.sp
                        }
                    }
                }
                Box {
                    sx {
                        display = Display.flex
                        flexWrap = FlexWrap.wrap
                        alignItems = AlignItems.center
                    }
                    Box {
                        sx { marginTop = 1.sp; marginRight = 2.sp }
                        Link {
                            underline = LinkUnderline.none
                            useComponent(a)
                            href = "/events"
                            color = "text.primary"
                            variant = "subtitle2"
                            +"events"
                        }
                    }
                    Box {
                        sx { marginTop = 1.sp; marginRight = 2.sp }
                        Link {
                            underline = LinkUnderline.none
                            useComponent(a)
                            href = "/music"
                            color = "text.primary"
                            variant = "subtitle2"
                            +"music"
                        }
                    }
                    Box {
                        sx { marginTop = 1.sp; marginRight = 2.sp }
                        Link {
                            underline = LinkUnderline.none
                            useComponent(a)
                            href = "/fundraising"
                            color = "text.primary"
                            variant = "subtitle2"
                            +"fundraising"
                        }
                    }
                    Box {
                        sx { marginTop = 1.sp; marginRight = 2.sp }
                        Link {
                            underline = LinkUnderline.none
                            useComponent(a)
                            href = "/about"
                            color = "text.primary"
                            variant = "subtitle2"
                            +"about"
                        }
                    }
                    Box {
                        sx { marginTop = 1.sp }
                        Button {
                            variant = ButtonVariant.outlined
                            color = ButtonColor.primary
                            useComponent(a) {
                                target = WindowTarget._blank
                            }
                            href = "mailto:info@baaahs.org?subject=Writing%20from%20the%20web"
                            size = Size.small
                            +"Contact"
                        }
                    }
                }
            }
        }
        Grid {
            item = true
            columns = breakpoints { xs = responsive(12) }
            Typography {
                align = TypographyAlign.center
                variant = TypographyVariant.subtitle2
                sx { color = Color("text.secondary") }
                gutterBottom = true
                +"Footer main"
            }
            Typography {
                align = TypographyAlign.center
                variant = TypographyVariant.caption
                sx { color = Color("text.secondary") }
                component = p
                +"Footer description"
            }
        }
    }

}

external interface FooterProps : Props {}