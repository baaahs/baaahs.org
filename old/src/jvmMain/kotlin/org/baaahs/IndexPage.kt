package org.baaahs

import kotlinx.html.HTML
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.head
import kotlinx.html.id
import kotlinx.html.script
import kotlinx.html.title

fun HTML.index() {
    head {
        title("baaahs.org")
    }
    body {
        div {
            id = "root"
        }
        script(src = "/baaahs-dot-org.js") {}
    }
}
