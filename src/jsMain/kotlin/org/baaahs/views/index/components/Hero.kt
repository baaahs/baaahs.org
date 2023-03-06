package org.baaahs.views.index.components

import org.baaahs.ToDo
import react.FC
import react.Props

val Hero = FC<HeroProps> {
    ToDo { +"Hero" }
}

external interface HeroProps : Props {}
