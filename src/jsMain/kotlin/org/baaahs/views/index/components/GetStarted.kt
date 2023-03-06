package org.baaahs.views.index.components

import org.baaahs.ToDo
import react.FC
import react.Props

val GetStarted = FC<GetStartedProps> {
    ToDo { +"GetStarted" }
}

external interface GetStartedProps : Props {}
