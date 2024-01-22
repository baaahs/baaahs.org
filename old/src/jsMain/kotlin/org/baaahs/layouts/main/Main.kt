package org.baaahs.layouts.main

import csstype.Color
import csstype.Position
import csstype.important
import csstype.integer
import csstype.px
import externals.mui.material.useScrollTrigger
import js.core.jso
import mui.material.AppBar
import mui.material.AppBarPosition
import mui.material.Box
import mui.material.Container
import mui.material.Divider
import mui.material.DrawerVariant
import mui.material.styles.Theme
import mui.material.styles.useTheme
import mui.material.useMediaQuery
import mui.system.Breakpoint
import mui.system.sx
import org.baaahs.components.TopNav
import org.baaahs.layouts.main.components.Footer
import org.baaahs.layouts.main.components.Sidebar
import org.baaahs.layouts.main.components.Topbar
import org.baaahs.util.sp
import react.FC
import react.PropsWithChildren
import react.dom.html.ReactHTML.main
import react.useCallback
import react.useState

val Main = FC<MainProps> { props ->
    val colorInvert = props.colorInvert ?: false
    val bgcolor = Color(props.bgcolor ?: "transparent")

    val theme = useTheme<Theme>()
    val isMd = useMediaQuery(theme.breakpoints.up(Breakpoint.md), jso {
            defaultMatches = true
    })

    var openSidebar by useState(false)
    val handleSidebarOpen = useCallback { openSidebar = true }
    val handleSidebarClose = useCallback { openSidebar = false }

    val open = if (isMd) false else openSidebar

    val trigger = useScrollTrigger(jso {
            disableHysteresis = true
            threshold = 38
    })

    Box {
        Box {
            sx {
                backgroundColor = bgcolor
                position = Position.relative
                zIndex = integer(theme.zIndex.appBar.toInt())
            }
            Container {
                sx {
                    paddingTop = important(8.px)
                    paddingBottom = important(0.px)
                }
                TopNav {
                    this.colorInvert = colorInvert
                }
            }
        }
        AppBar {
            position = AppBarPosition.sticky
            sx {
                top = 0.sp

                backgroundColor = if (trigger) Color(theme.palette.background.paper) else bgcolor
            }

            elevation = if (trigger) 1 else 0
            Container {
                sx {
                    paddingTop = 1.sp
                    paddingBottom = 1.sp
                }
                Topbar {
                    onSidebarOpen = handleSidebarOpen
                    this.colorInvert = if (trigger) false else colorInvert
                }
            }
        }
        Sidebar {
            onClose = handleSidebarClose
            this.open = open
            variant = DrawerVariant.temporary
        }
        main {
            +props.children
            Divider {}
        }
        Container {
            sx {
                paddingTop = 4.sp
                paddingBottom = 4.sp
            }
            Footer {}
        }
    }
}

external interface MainProps : PropsWithChildren {
    var colorInvert: Boolean?
    var bgcolor: String?
}