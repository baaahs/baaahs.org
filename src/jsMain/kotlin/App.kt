import externals.react_head.HeadProvider
import kotlinx.css.Color
import kotlinx.css.CssBuilder
import kotlinx.css.LinearDimension
import kotlinx.css.backgroundColor
import kotlinx.css.body
import kotlinx.css.fontFamily
import kotlinx.css.margin
import kotlinx.css.maxWidth
import kotlinx.css.padding
import kotlinx.css.px
import org.baaahs.assman.view.InclineMapPage
import org.baaahs.assman.view.IndexPage
import react.FC
import react.Props
import react.createElement
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.ul
import react.router.Route
import react.router.Routes
import react.router.dom.BrowserRouter
import react.router.dom.Link
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

val App = FC<Props> {
    HeadProvider {
        externals.react_head.Link {
            rel = "stylesheet"
            href = "https://fonts.googleapis.com/css2?family=Nunito&display=swap"
        }
        GlobalStyles.applyGlobalStyle()

        BrowserRouter {
            div {
                ul {
                    li {
                        Link {
                            to = "/"
                            +"Home"
                        }
                    }

                    li {
                        Link {
                            to = "/incline-map"
                            +"Incline Map"
                        }
                    }
                }
            }

            Routes {
                Route {
                    index = true
                    element = createElement(IndexPage)
                }

                Route {
                    path = "/incline-map"
                    element = createElement(InclineMapPage)
                }
            }
        }
    }
}