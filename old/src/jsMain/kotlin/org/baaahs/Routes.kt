package org.baaahs

import org.baaahs.layouts.Navigation
import org.baaahs.views.index.IndexView
import org.baaahs.views.viewsRoutes
import react.FC
import react.Props
import react.ReactNode
import react.create
import react.router.Navigate
import react.router.PathRoute

class SiteRoute(val path: String, val renderer: () -> ReactNode)

val docsRoutes = listOf<SiteRoute>()
val blocksRoutes = listOf<SiteRoute>()
val demosRoutes = listOf<SiteRoute>()

val Routes = FC<Props> {
    react.router.Routes {
        listOf(viewsRoutes, docsRoutes, blocksRoutes, demosRoutes)
            .flatten()
            .forEachIndexed { i, item ->
                PathRoute {
                    key = i.toString()
                    path = item.path
                    element = item.renderer()
                }
            }

        PathRoute {
            path = "/new"
            element = IndexView.create()
        }

        Navigation.pages.forEach { page ->
            page.element?.run {
                PathRoute {
                    path = page.href
                    element = page.element
                }
            }
        }

        PathRoute {
            path = "*"
            element = Navigate.create {
                replace = true
                to = "/not-found-cover"
            }
        }
    }
}