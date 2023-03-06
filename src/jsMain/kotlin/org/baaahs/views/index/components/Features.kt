package org.baaahs.views.index.components

import org.baaahs.ToDo
import react.FC
import react.Props

val Features = FC<FeaturesProps> {
    ToDo { +"Features" }
}

external interface FeaturesProps : Props {}
