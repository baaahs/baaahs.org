package org.baaahs.layouts.main.components

import org.baaahs.ToDo
import org.baaahs.layouts.Page
import react.FC
import react.Props

val Sidebar = FC<SidebarProps> {
    ToDo { +"Sidebar" }
}

external interface SidebarProps : Props {
    var onClose: (() -> Unit)?
    var open: Boolean
    var variant: String
    var pages: Map<String, List<Page>>
}