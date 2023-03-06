package org.baaahs.views.index.components

import org.baaahs.ToDo
import react.FC
import react.Props

val Services = FC<ServicesProps> {
    ToDo { +"Services" }
}

external interface ServicesProps : Props {}
