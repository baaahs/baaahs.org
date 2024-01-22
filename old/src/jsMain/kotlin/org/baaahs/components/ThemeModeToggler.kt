package org.baaahs.components

import csstype.Auto
import csstype.BorderColor
import externals.mui.material.styles.alpha
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.PaletteMode
import mui.material.styles.Theme
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.util.sp
import react.FC
import react.Props
import react.dom.aria.ariaLabel
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import react.dom.svg.StrokeLinecap
import react.dom.svg.StrokeLinejoin

val ThemeModeToggler = FC<Props> {
    val theme = useTheme<Theme>()
    val themeToggler = theme.asDynamic().themeToggler
    val mode = theme.palette.mode

    Button {
        variant = ButtonVariant.outlined
        onClick = { themeToggler() }
        ariaLabel = "Dark mode toggler"
        color = if (mode == PaletteMode.light) ButtonColor.primary else ButtonColor.secondary
        sx {
            borderRadius = 2.sp
            minWidth = Auto.auto
            padding = 0.5.sp
            borderColor = alpha(theme.palette.divider, 0.2) as BorderColor
        }

        if (mode == PaletteMode.light) {
            svg {
                width = 20.0
                height = 20.0
                xmlns = "http://www.w3.org/2000/svg"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor"
                path {
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round
                    strokeWidth = 2.0
                    d =
                        "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                }
            }
        } else {
            svg {
                width = 20.0
                height = 20.0
                xmlns = "http://www.w3.org/2000/svg"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor"
                path {
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round
                    strokeWidth = 2.0
                    d =
                        "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                }
            }

        }
    }
}