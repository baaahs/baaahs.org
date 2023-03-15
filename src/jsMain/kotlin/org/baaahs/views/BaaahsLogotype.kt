package org.baaahs.views

import mui.material.Box
import mui.material.PaletteMode
import mui.material.styles.Theme
import mui.material.styles.useTheme
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.dom.html.ReactHTML

val BaaahsLogotype = FC<BaaahsLogotypeProps> { props ->
    val colorInvert = props.colorInvert ?: false
    val theme = useTheme<Theme>()
    val mode = theme.palette.mode

    Box {
        useComponent(ReactHTML.img) {
            src = if (mode == PaletteMode.light && !colorInvert) {
                "/images/baaahs-logotype.svg"
            } else {
                "/images/baaahs-logotype.svg" // TODO: Should be inverted.
            }

            height = 1.sp
            width = 1.sp
        }
    }
}

external interface BaaahsLogotypeProps : Props {
    var colorInvert: Boolean?
}