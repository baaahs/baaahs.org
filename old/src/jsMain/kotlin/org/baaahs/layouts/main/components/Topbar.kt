package org.baaahs.layouts.main.components

import csstype.AlignItems
import csstype.Auto
import csstype.Color
import csstype.Display
import csstype.JustifyContent
import csstype.None
import csstype.TextTransform
import csstype.px
import externals.mui.material.styles.alpha
import mui.material.Box
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Link
import mui.material.LinkUnderline
import mui.material.Size
import mui.material.styles.Theme
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.layouts.Navigation
import org.baaahs.util.breakpoints
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import org.baaahs.views.BaaahsLogotype
import react.FC
import react.Props
import react.PropsWithChildren
import react.dom.aria.ariaLabel
import react.dom.html.ReactHTML.a
import web.window.WindowTarget

private external interface TopbarNavItemProps : PropsWithChildren {
    var url: String
}

val Topbar = FC<TopbarProps> { props ->
    val theme = useTheme<Theme>()
    val colorInvert = props.colorInvert ?: false

    val navItem = FC<TopbarNavItemProps> { linkProps ->
        Box {
            sx { marginRight = breakpoints { xs = 2.sp; sm = 4.sp } }

            Link {
                useComponent(a)
                href = linkProps.url
                underline = LinkUnderline.none
                color = if (colorInvert) "common.white" else "text.primary"
                sx {
                    display = Display.flex
                    alignItems = AlignItems.center
                    textTransform = TextTransform.lowercase
                }

                +linkProps.children
            }
        }
    }

    Box {
        sx {
            display = Display.flex
            justifyContent = JustifyContent.spaceBetween
            alignItems = AlignItems.center
            width = 1.sp
        }

        Box {
            useComponent(a) { href = "/"; title = "BAAAHS" }
            sx { display = Display.flex; width = breakpoints { xs = 120.px; md = 150.px } }
            BaaahsLogotype {}
        }

        Box {
            sx {
                display = breakpoints { xs = None.none; md = Display.flex }
                alignItems = AlignItems.center
                "& a" { marginRight = 4.sp }
            }

            Navigation.pages.forEach { page ->
                navItem {
                    url = page.href
                    page.render(this)
                }
            }
        }

        Box {
            sx {
                display = breakpoints { xs = None.none; md = Display.flex }
                alignItems = AlignItems.end
                "& a" { marginLeft = 4.sp }
            }

            Navigation.outboundLinks.forEach { page ->
                navItem {
                    url = page.href
                    page.render(this)
                }
            }

            Box {
                sx { marginLeft = 4.sp }
                Button {
                    variant = ButtonVariant.contained
                    color = ButtonColor.primary
                    useComponent(a) {
                        target = WindowTarget._blank
                    }
                    href = "/crew/"
                    size = Size.large
                    +"Crew login"
                }
            }
        }
        Box {
            sx {
                display = breakpoints {
                    xs = Display.block
                    md = None.none
                }
                alignItems = AlignItems.center
            }

            Button {
                onClick = { props.onSidebarOpen() }
                ariaLabel = "Menu"
                variant = ButtonVariant.outlined
                sx {
                    borderRadius = 2.sp
                    minWidth = Auto.auto
                    padding = 1.sp
                    borderColor = Color(alpha(theme.palette.divider, 0.2))
                }

                mui.icons.material.Menu {}
            }
        }
    }
}

external interface TopbarProps : Props {
    var onSidebarOpen: (() -> Unit)
    var colorInvert: Boolean?
}