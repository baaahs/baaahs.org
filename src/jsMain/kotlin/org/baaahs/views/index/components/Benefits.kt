package org.baaahs.views.index.components

import org.baaahs.ToDo
import react.FC
import react.Props

val Benefits = FC<BenefitsProps> {
    ToDo { +"Benefits" }
}

external interface BenefitsProps : Props {}
