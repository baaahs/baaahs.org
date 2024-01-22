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
import mui.material.Size
import mui.material.Typography
import mui.material.TypographyAlign
import mui.material.styles.TypographyVariant
import mui.system.responsive
import mui.system.sx
import org.baaahs.layouts.Navigation
import org.baaahs.util.breakpoints
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import org.baaahs.views.BaaahsLogotype
import react.FC
import react.Props
import react.PropsWithChildren
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.p
import web.window.WindowTarget

private val navItem = FC<FooterNavItemProps> { props ->
    Box {
        sx { marginTop = 1.sp; marginRight = 2.sp }
        Link {
            underline = LinkUnderline.none
            useComponent(a)
            href = props.url
            color = "text.primary"
            variant = "subtitle2"
            +props.children
        }
    }
}

private external interface FooterNavItemProps : PropsWithChildren {
    var url: String
}

val Footer = FC<FooterProps> {
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
                    useComponent(a) { href = "/"; title = "BAAAHS" }
                    sx { display = Display.flex; width = 100.px }
                    BaaahsLogotype {}
                }

                Box {
                    sx {
                        display = Display.flex
                        flexWrap = FlexWrap.wrap
                        alignItems = AlignItems.center
                    }

                    Navigation.pages.forEach { page ->
                        navItem {
                            url = page.href
                            page.render(this)
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