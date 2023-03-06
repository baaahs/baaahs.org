package org.baaahs.layouts.main.components

import org.baaahs.ToDo
import react.FC
import react.Props

val Footer = FC<FooterProps> {
    ToDo { +"Footer" }
}

external interface FooterProps : Props {}