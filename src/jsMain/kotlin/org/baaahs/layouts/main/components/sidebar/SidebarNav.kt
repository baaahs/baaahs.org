package org.baaahs.layouts.main.components.sidebar

import csstype.AlignItems
import csstype.Display
import csstype.FontWeight
import csstype.px
import mui.material.Box
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.PaletteMode
import mui.material.Size
import mui.material.styles.Theme
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.layouts.Page
import org.baaahs.util.breakpoints
import org.baaahs.util.paddingX
import org.baaahs.util.paddingY
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.img
import web.window.WindowTarget

val SidebarNav = FC<SidebarNavProps> { props ->
    val theme = useTheme<Theme>()
    val mode = theme.palette.mode

    Box {
        Box {
            sx {
                width = 1.sp
                paddingX = 2.sp
                paddingY = 1.sp
            }
            Box {
                sx {
                    display = Display.flex
                }
                useComponent(a) {
                    href = "/"
                    title = "theFront"
                }
                sx { width = breakpoints { xs = 100.px; md = 120.px } }

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
        }
        Box {
            sx {
                paddingX = 2.sp
                paddingY = 2.sp
            }
            Box {
                Box {
                    Link {
                        underline = LinkUnderline.none
                        useComponent(a)
                        href = "/events"
                        sx {
                            display = Display.flex
                            alignItems = AlignItems.center
                            fontWeight = FontWeight.bold
                        }

                        +"events"
                    }
                }
                Box {
                    Link {
                        underline = LinkUnderline.none
                        useComponent(a)
                        href = "/music"
                        sx {
                            display = Display.flex
                            alignItems = AlignItems.center
                            fontWeight = FontWeight.bold
                        }

                        +"music"
                    }
                }
                Box {
                    Link {
                        underline = LinkUnderline.none
                        useComponent(a)
                        href = "/fundraising"
                        sx {
                            display = Display.flex
                            alignItems = AlignItems.center
                            fontWeight = FontWeight.bold
                        }

                        +"fundraising"
                    }
                }
                Box {
                    Link {
                        underline = LinkUnderline.none
                        useComponent(a)
                        href = "/about"
                        sx {
                            display = Display.flex
                            alignItems = AlignItems.center
                            fontWeight = FontWeight.bold
                        }

                        +"about"
                    }
                }
            }

            Box {
                NavItem {
                    title = "Landings"
                    items = props.pages["landings"]!!
                }
            }
            Box {
                NavItem {
                    title = "Company"
                    items = props.pages["company"]!!
                }
            }
            Box {
                NavItem {
                    title = "Pages"
                    items = props.pages["secondary"]!!
                }
            }
            Box {
                NavItem {
                    title = "Account"
                    items = props.pages["account"]!!
                }
            }
            Box {
                NavItem {
                    title = "Blog"
                    items = props.pages["blog"]!!
                }
            }
            Box {
                NavItem {
                    title = "Portfolio"
                    items = props.pages["portfolio"]!!
                }
            }
            Box {
                sx { marginTop = 2.px }
                Button {
                    size = Size.large
                    variant = ButtonVariant.outlined
                    fullWidth = true
                    useComponent(a)
                    href = "/crew"
                    +"Join the flock"
                }
            }
            Box {
                sx { marginTop = 1.px }
                Button {
                    size = Size.large
                    variant = ButtonVariant.contained
                    color = ButtonColor.primary
                    fullWidth = true
                    useComponent(a) {
                        target = WindowTarget._blank
                    }
                    href = "/crew"
                    +"Crew login"
                }
            }
        }
    }
}

external interface SidebarNavProps : Props {
    var pages: Map<String, List<Page>>
}