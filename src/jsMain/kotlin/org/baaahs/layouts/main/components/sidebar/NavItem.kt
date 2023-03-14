package org.baaahs.layouts.main.components.sidebar

import csstype.Color
import csstype.Display
import csstype.JustifyContent
import csstype.NamedColor
import csstype.integer
import externals.mui.material.styles.alpha
import kotlinx.browser.window
import mui.icons.material.ExpandMore
import mui.material.Accordion
import mui.material.AccordionDetails
import mui.material.AccordionSummary
import mui.material.Box
import mui.material.Button
import mui.material.Grid
import mui.material.Size
import mui.material.Typography
import mui.material.styles.Theme
import mui.material.styles.TypographyVariant
import mui.material.styles.useTheme
import mui.system.responsive
import mui.system.sx
import org.baaahs.layouts.Page
import org.baaahs.util.breakpoints
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.create
import react.dom.aria.ariaControls
import react.dom.html.ReactHTML.a
import react.useEffect
import react.useState

val NavItem = FC<NavItemProps> { props ->
    val title = props.title
    val items = props.items

    val theme = useTheme<Theme>()
    var activeLink by useState("")

    useEffect {
        activeLink = window.location.pathname
    }

    val hasActiveLink = { items.any { it.href == activeLink } }


    Box {
        Accordion {
            disableGutters = true
            elevation = 0
            sx { backgroundColor = NamedColor.transparent }

            AccordionSummary {
                expandIcon = ExpandMore.create()

                ariaControls = "panel1a-content"
                id = "panel1a-header"
                sx { padding = 0.sp }

                Typography {
                    sx {
                        fontWeight = integer(if (hasActiveLink()) 600 else 400)
                        color = Color(if (hasActiveLink()) "primary" else "text.primary")
                    }
                    +title
                }
            }
            AccordionDetails {
                sx { padding = 0.sp }

                Grid {
                    container = true
                    spacing = 1.sp
                    items.forEachIndexed { i, p ->
                        Grid {
                            item = true
                            key = i.toString()
                            columns = breakpoints { xs = responsive(12) }
                            Button {
                                size = Size.large
                                useComponent(a)
                                href = p.href
                                fullWidth = true
                                sx {
                                    justifyContent = JustifyContent.flexStart

                                    color = if (activeLink === p.href) {
                                        theme.palette.primary.main
                                    } else {
                                        theme.palette.text.primary
                                    }

                                    backgroundColor = Color(if (activeLink === p.href) {
                                        alpha(theme.palette.primary.main.toString(), 0.1)
                                    } else {
                                        "transparent"
                                    })

                                    fontWeight = integer(if (activeLink === p.href) 600 else { 400 })

                                }

                                +p.title
                                if (p.isNew) {
                                    Box {
                                        sx {
                                            padding = 0.5.sp
                                            display = Display.inlineFlex
                                            borderRadius = 1.sp
                                            backgroundColor = Color("primary.main")
                                            marginLeft = 2.sp
                                        }
                                        Typography {
                                            variant = TypographyVariant.caption
                                            sx {
                                                color = Color("common.white")
                                                lineHeight = 1.sp
                                            }

                                            +"new"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


}

external interface NavItemProps : Props {
    var title: String
    var id: String
    var items: List<Page>
    var colorInvert: Boolean?
}