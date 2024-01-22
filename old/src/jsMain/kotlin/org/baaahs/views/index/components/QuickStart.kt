package org.baaahs.views.index.components

import org.baaahs.ToDo
import react.FC
import react.Props

val QuickStart = FC<QuickStartProps> {
    ToDo { +"QuickStart" }
}

external interface QuickStartProps : Props {}
