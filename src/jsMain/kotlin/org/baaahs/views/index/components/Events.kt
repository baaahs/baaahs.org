package org.baaahs.views.index.components

import csstype.Color
import csstype.integer
import mui.material.Box
import mui.material.Typography
import mui.material.TypographyAlign
import mui.material.styles.TypographyVariant
import mui.system.sx
import org.baaahs.blocks.blog.HorizontallyAlignedBlogCardWithShapedImage
import react.FC
import react.Props

val Events = FC<EventsProps> {
    Box {
        Typography {
            variant = TypographyVariant.h4
            sx {
                color = Color("text.primary")
                fontWeight = integer(700)
            }
            align = TypographyAlign.center
            gutterBottom = true

            +"upcoming events"

            HorizontallyAlignedBlogCardWithShapedImage {}
        }
    }
}

external interface EventsProps : Props {}
