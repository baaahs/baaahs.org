package org.baaahs.views

import org.baaahs.SiteRoute
import org.baaahs.views.index.IndexView
import react.create

val viewsRoutes = listOf(
    SiteRoute("/") { IndexView.create() },
)

