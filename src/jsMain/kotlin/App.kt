import csstype.FontSize
import csstype.em
import emotion.react.css
import externals.react_head.HeadProvider
import externals.react_head.Meta
import kotlinx.css.CssBuilder
import kotlinx.css.body
import kotlinx.css.fontFamily
import mui.material.CssBaseline
import mui.material.styles.Theme
import mui.material.styles.ThemeProvider
import org.baaahs.assman.view.AssManIndexPage
import org.baaahs.view.IndexPage
import react.FC
import react.Props
import react.createElement
import react.dom.html.ReactHTML.div
import react.router.PathRoute
import react.router.Routes
import react.router.dom.BrowserRouter
import react.router.dom.Link
import react.useState
import styled.StyleSheet

object GlobalStyles : StyleSheet("GlobalStyles") {
    private val styles = CssBuilder(allowClasses = false).apply {
        body {
            fontFamily = "Nunito, sans-serif"
        }
    }

    fun applyGlobalStyle() {
        styled.injectGlobal(styles)
    }
}

class Styles(private val theme: Theme) : StyleSheet("base") {
    val appTabs by css {

    }
}

val App = FC<Props> {
    val theme by useState { Themes.Light }

    GlobalStyles.applyGlobalStyle()
    val styles = Styles(theme)

    CssBaseline {
        ThemeProvider {
            this.theme = theme

            HeadProvider {
                externals.react_head.Link {
                    rel = "stylesheet"
                    href = "https://fonts.googleapis.com/css2?family=Nunito&display=swap"
                }

                Meta {
                    name = "viewport"
                    content = "initial-scale=1, width=device-width"
                }

                BrowserRouter {
                    div {
                        css { fontSize = FontSize.small; padding = .5.em }

                        Link { to = "/"; +"Home" }
                        +"|"
                        Link { to = "/incline-map"; +"Incline Map" }
                    }

                    Routes {
                        PathRoute {
                            index = true
                            element = createElement(IndexPage)
                        }

                        PathRoute {
                            path = "/assman"
                            index = true
                            element = createElement(AssManIndexPage)
                        }
                    }
                }
            }
        }
    }
}