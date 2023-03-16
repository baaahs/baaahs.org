package org.baaahs.layouts

import org.baaahs.images.IconEmail
import org.baaahs.images.IconSoundcloud
import org.baaahs.views.index.components.Events
import org.baaahs.views.index.components.Music
import react.ChildrenBuilder
import react.ReactNode
import react.create

data class Page(
    val title: String,
    val href: String,
    val isNew: Boolean = false,
    val element: ReactNode? = null,
    val render: ChildrenBuilder.() -> Unit = { +title }
)

object Navigation {
    val pages = listOf(
        Page("Events", "/events", element = Events.create()),
        Page("Music", "/music", element = Music.create()),
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