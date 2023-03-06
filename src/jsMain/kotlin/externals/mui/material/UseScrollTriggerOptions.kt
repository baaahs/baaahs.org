@file:JsModule("@mui/material")
@file:JsNonModule

package externals.mui.material

import web.dom.Node

external val useScrollTrigger: (options: UseScrollTriggerOptions?) -> Boolean

external interface UseScrollTriggerOptions {
    var disableHysteresis: Boolean?
    var target: Node? // | Window
    var threshold: Number?
}

