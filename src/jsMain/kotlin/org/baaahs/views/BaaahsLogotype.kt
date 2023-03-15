package org.baaahs.views

import csstype.Filter
import csstype.FilterFunction
import csstype.NamedColor
import csstype.dropShadow
import csstype.px
import mui.material.Box
import mui.material.styles.Theme
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.util.isDark
import org.baaahs.util.sp
import org.baaahs.util.useComponent
import react.FC
import react.Props
import react.dom.html.ReactHTML

val BaaahsLogotype = FC<Props> { props ->
    val theme = useTheme<Theme>()

    Box {
        useComponent(ReactHTML.img) {
            if (theme.isDark()) {
                sx {
                    filter = filters(
                        dropShadow(0.px, 0.px, 4.px, NamedColor.white),
                        dropShadow(0.px, 0.px, 4.px, NamedColor.white)
                    )
                }
            }
            src = "/images/baaahs-logotype.svg"
            height = 1.sp
            width = 1.sp
        }
    }
}

private fun filters(vararg filters: Filter) = filters.joinToString(" ") as FilterFunction