package org.baaahs

import kotlinext.js.require
import org.baaahs.components.Page
import react.FC
import react.Props
import react.router.dom.BrowserRouter

val styles = run {
    require("slick-carousel/slick/slick.css")
    require("slick-carousel/slick/slick-theme.css")
    require("aos/dist/aos.css")
}

val App = FC<Props> {
    Page {
        BrowserRouter {
            Routes {}
        }
    }
}