package org.baaahs.images

import mui.material.styles.Theme
import mui.material.styles.useTheme
import react.FC
import react.Props
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg

val IconEmail = FC<Props> {
    val theme = useTheme<Theme>()

    svg {
        xmlns = "http://www.w3.org/2000/svg"
        x = 0.0
        y = 0.0
        width = 32.0
        height = 32.0
        viewBox = "0 0 32 32"
        path {
            d =
                "M7.1 24C6.5225 24 6.0283 23.8043 5.6174 23.413C5.2058 23.021 5 22.55 5 22V10C5 9.45 5.2058 8.97933 5.6174 8.588C6.0283 8.196 6.5225 8 7.1 8H23.9C24.4775 8 24.972 8.196 25.3836 8.588C25.7945 8.97933 26 9.45 26 10V22C26 22.55 25.7945 23.021 25.3836 23.413C24.972 23.8043 24.4775 24 23.9 24H7.1ZM23.9 12L16.0512 16.675C15.9637 16.725 15.8717 16.7623 15.7751 16.787C15.6792 16.8123 15.5875 16.825 15.5 16.825C15.4125 16.825 15.3208 16.8123 15.2249 16.787C15.1283 16.7623 15.0362 16.725 14.9487 16.675L7.1 12V22H23.9V12ZM15.5 15L23.9 10H7.1L15.5 15ZM7.1 12.25V10.775V10.8V10.787V12.25Z"
            fill = theme.palette.text.primary.toString()
        }
    }
}