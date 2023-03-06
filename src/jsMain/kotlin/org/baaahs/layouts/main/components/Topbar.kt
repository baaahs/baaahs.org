package org.baaahs.layouts.main.components

import org.baaahs.ToDo
import org.baaahs.layouts.Page
import react.FC
import react.Props

val Topbar = FC<TopbarProps> {
    ToDo { +"Topbar" }
}

external interface TopbarProps : Props {
    var onSidebarOpen: (() -> Unit)?
    var pages: Map<String, List<Page>>?
    var colorInvert: Boolean?
}