package org.baaahs.layouts.main.components

import csstype.AlignItems
import csstype.Display
import csstype.FontWeight
import csstype.TextTransform
import csstype.pct
import csstype.px
import mui.material.Box
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Drawer
import mui.material.DrawerAnchor
import mui.material.DrawerVariant
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.Size
import mui.system.sx
import org.baaahs.layouts.Navigation
import org.baaahs.util.breakpoints
import org.baaahs.util.paddingX
import org.baaahs.util.paddingY
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import org.baaahs.views.BaaahsLogotype
import react.FC
import react.Props
import react.PropsWithChildren
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.a
import web.window.WindowTarget

private val navItem = FC<SidebarNavItemProps> { props ->
    Box {
        Link {
            useComponent(ReactHTML.a)
            href = props.url
            underline = LinkUnderline.none
            sx {
                display = Display.flex
                alignItems = AlignItems.center
                fontWeight = FontWeight.bold
                textTransform = TextTransform.lowercase
            }

            +props.children
        }
    }
}

private external interface SidebarNavItemProps : PropsWithChildren {
    var url: String
}

val Sidebar = FC<SidebarProps> { props ->
    Drawer {
        anchor = DrawerAnchor.left
        onClose = { _: dynamic, _: String ->  props.onClose() }
        open = props.open
        variant = props.variant
        sx {
            "& .MuiPaper-root" {
                width = 100.pct
                maxWidth = 280.px
            }
        }

        Box {
            sx {
                height = 100.pct
                padding = 1.sp
            }

            Box {
                Box {
                    sx { width = 1.sp; paddingX = 2.sp; paddingY = 1.sp }

                    Box {
                        useComponent(a) { href = "/"; title = "BAAAHS" }
                        sx { display = Display.flex; width = breakpoints { xs = 100.px; md = 120.px } }
                        BaaahsLogotype {}
                    }
                }

                Box {
                    sx { padding = 2.sp }

                    Box {
                        Navigation.pages.forEach { page ->
                            navItem {
                                url = page.href
                                page.render(this)
                            }
                        }
                    }

                    Box {
                        sx { marginTop = 2.px }
                        Button {
                            size = Size.large
                            variant = ButtonVariant.outlined
                            fullWidth = true
                            useComponent(ReactHTML.a)
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
                            useComponent(ReactHTML.a) {
                                target = WindowTarget._blank
                            }
                            href = "/crew"
                            +"Crew login"
                        }
                    }
                }
            }
        }
    }
}

external interface SidebarProps : Props {
    var onClose: (() -> Unit)
    var open: Boolean
    var variant: DrawerVariant
}