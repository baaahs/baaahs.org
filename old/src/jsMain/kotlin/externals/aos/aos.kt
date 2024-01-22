@file:JsModule("aos")
@file:JsNonModule

package externals.aos

import react.ComponentType
import react.Props
import react.ReactElement
import react.dom.html.BaseHTMLAttributes
import react.dom.html.HTMLAttributes
import react.dom.html.LinkHTMLAttributes
import react.dom.html.MetaHTMLAttributes
import react.dom.html.StyleHTMLAttributes
import web.html.*

external val init: (options: dynamic) -> Unit
external val refresh: () -> Unit
