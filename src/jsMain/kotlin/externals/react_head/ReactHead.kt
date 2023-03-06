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

external var HeadProvider: ComponentType<HeadProviderProps>

external var Title: ComponentType<HTMLAttributes<HTMLTitleElement>>

external var Style: ComponentType<StyleHTMLAttributes<HTMLStyleElement>>

external var Meta: ComponentType<MetaHTMLAttributes<HTMLMetaElement>>

external var Link: ComponentType<LinkHTMLAttributes<HTMLLinkElement>>

external var Base: ComponentType<BaseHTMLAttributes<HTMLBaseElement>>