package org.baaahs.layouts.main.components.topbar

import org.baaahs.layouts.Page
import react.FC
import react.Props

val NavItem = FC<NavItemProps> {

}

external interface NavItemProps : Props {
    var title: String
    var id: String
    var items: List<Page>
    var colorInvert: Boolean?
}