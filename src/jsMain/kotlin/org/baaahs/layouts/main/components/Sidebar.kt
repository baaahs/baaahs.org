package org.baaahs.layouts.main.components

import csstype.pct
import csstype.px
import mui.material.Box
import mui.material.Drawer
import mui.material.DrawerAnchor
import mui.material.DrawerVariant
import mui.system.sx
import org.baaahs.layouts.Page
import org.baaahs.util.sp
import react.FC
import react.Props

val Sidebar = FC<SidebarProps> { props ->
    Drawer {
        anchor = DrawerAnchor.left
        onClose = { _: dynamic, _: String ->  props.onClose() }
        open = props.open
        variant = props.variant
        sx {
            "& .MuiPaper-root" {
                width = 100.pct
                maxWidth = 280.px
            }
        }

        Box {
            sx {
                height = 100.pct
                padding = 1.sp
            }

            SidebarNav {
                pages = props.pages
            }
        }
    }
}

external interface SidebarProps : Props {
    var onClose: (() -> Unit)
    var open: Boolean
    var variant: DrawerVariant
    var pages: Map<String, List<Page>>
}