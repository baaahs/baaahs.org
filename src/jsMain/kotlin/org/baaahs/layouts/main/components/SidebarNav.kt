package org.baaahs.layouts.main.components

import csstype.Display
import csstype.px
import mui.material.Box
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.PaletteMode
import mui.material.Size
import mui.material.styles.Theme
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.layouts.Page
import org.baaahs.layouts.main.components.topbar.NavItem
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
                            "https://assets.maccarianagency.com/the-front/logos/logo.svg"
                        } else {
                            "https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
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
                    href = "/docs/introduction"
                    +"Documentation"
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
                    href = "https://mui.com/store/items/the-front-landing-page/"
                    +"Purchase now"
                }
            }
        }
    }
}

external interface SidebarNavProps : Props {
    var pages: Map<String, List<Page>>
}