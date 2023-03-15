package org.baaahs.layouts

import org.baaahs.images.IconEmail
import org.baaahs.images.IconSoundcloud
import react.ChildrenBuilder

data class Page(
    val title: String,
    val href: String,
    val isNew: Boolean = false,
    val render: ChildrenBuilder.() -> Unit = { +title }
)

object Navigation {
    val pages = listOf(
        Page("Events", "/events"),
        Page("Music", "/music"),
        Page("Fundraising", "/fundraising"),
        Page("About", "/about")
    )

    val outboundLinks = listOf(
        Page("Soundcloud", "https://soundcloud.com/baaahs") {
            IconSoundcloud {}
        },
        Page("Email", "mailto:info@baaahs.org?subject=Writing%20from%20baaahs.org") {
            IconEmail {}
        }
    )
}