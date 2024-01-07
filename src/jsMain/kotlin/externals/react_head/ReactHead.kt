@file:JsModule("react-head")
@file:JsNonModule

package externals.react_head

import react.ComponentType
import react.Props
import react.ReactElement
import react.dom.html.BaseHTMLAttributes
import react.dom.html.HTMLAttributes
import react.dom.html.LinkHTMLAttributes
import react.dom.html.MetaHTMLAttributes
import react.dom.html.StyleHTMLAttributes
import web.html.HTMLBaseElement
import web.html.HTMLLinkElement
import web.html.HTMLMetaElement
import web.html.HTMLStyleElement
import web.html.HTMLTitleElement

external interface HeadProviderProps : Props {
    var headTags: Array<ReactElement<*>>?
        get() = definedExternally
        set(value) = definedExternally
    var children: Any?
        get() = definedExternally
        set(value) = definedExternally
}

external val HeadProvider: ComponentType<HeadProviderProps>

external val Title: ComponentType<HTMLAttributes<HTMLTitleElement>>

external val Style: ComponentType<StyleHTMLAttributes<HTMLStyleElement>>

external val Meta: ComponentType<MetaHTMLAttributes<HTMLMetaElement>>

external val Link: ComponentType<LinkHTMLAttributes<HTMLLinkElement>>

external val Base: ComponentType<BaseHTMLAttributes<HTMLBaseElement>>