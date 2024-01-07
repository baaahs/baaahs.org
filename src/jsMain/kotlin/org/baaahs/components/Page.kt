package org.baaahs.components

import externals.react_head.HeadProvider
import externals.react_head.Link
import externals.react_head.Meta
import js.core.jso
import kotlinx.browser.localStorage
import mui.material.CssBaseline
import mui.material.Paper
import mui.material.styles.ThemeProvider
import org.baaahs.theme.getTheme
import react.FC
import react.PropsWithChildren
import react.useEffect
import react.useState
import web.dom.document

fun useDarkMode(): Triple<String, () -> Unit, Boolean> {
    var themeMode by useState("light")
    var mountedComponent by useState(false)

    fun setMode(mode: String) {
        try {
            localStorage.setItem("themeMode", mode)
        } catch (e: Exception) {
            /* do nothing */
        }

        themeMode = mode
    }

    fun themeToggler() {
        if (themeMode == "light") {
            setMode("dark")
        } else {
            setMode("light")
        }
    }

    useEffect {
        try {
            val localTheme = localStorage.getItem("themeMode")
            if (localTheme != null) {
                themeMode = localTheme
            } else {
                setMode("light")
            }
        } catch (e: Exception) {
            setMode("light")
        }

        mountedComponent = true
    }

    return Triple(themeMode, ::themeToggler, mountedComponent)
}

val Page = FC<PropsWithChildren> { props ->
    useEffect {
        // Remove the server-side injected CSS.
        val jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles != null) {
            jssStyles.parentElement?.removeChild(jssStyles)
        }

        externals.aos.init(
            jso {
                once = true
                delay = 0
                duration = 800
                offset = 0
                easing = "ease-in-out"
            }
        )
    }

    val (themeMode, themeToggler, mountedComponent) = useDarkMode()

    useEffect(mountedComponent, themeMode) {
        externals.aos.refresh()
    }

    HeadProvider {
        Link {
            rel = "icon"
            href = "/images/favicon.png"
        }

        Link {
            rel = "stylesheet"
            href = "/fonts/fonts.css"
        }

        Meta {
            name = "viewport"
            content = "initial-scale=1, width=device-width"
        }

        ThemeProvider {
            theme = getTheme(themeMode, themeToggler)

            /* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */
            CssBaseline {}

            Paper {
                elevation = 0
                +props.children
            }
        }
    }
}