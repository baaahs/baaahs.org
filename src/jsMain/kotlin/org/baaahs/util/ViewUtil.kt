package org.baaahs.util

import csstype.MarginLeft
import csstype.MarginTop
import csstype.PaddingLeft
import csstype.PaddingTop
import csstype.StandardLonghandProperties
import js.core.jso
import kotlinx.coroutines.MainScope
import kotlinx.datetime.Clock
import mui.material.ButtonProps
import mui.types.PropsWithComponent
import react.IntrinsicType
import react.PropsWithClassName

val scope = MainScope()
val clock = Clock.System

external interface Breakpoints<T> {
    var xs: T?
    var sm: T?
    var md: T?
    var lg: T?
    var xl: T?
}

fun <T> breakpoints(init: Breakpoints<T>.() -> Unit): T {
    val breakpoints = jso<Breakpoints<T>>()
    breakpoints.init()
    return breakpoints as T
}

inline val Number.sp get() = this.asDynamic()

var StandardLonghandProperties.paddingX: PaddingLeft
    get() = error("not implemented")
    set(value) {
        paddingLeft = value
        paddingRight = value
    }

var StandardLonghandProperties.paddingY: PaddingTop
    get() = error("not implemented")
    set(value) {
        paddingTop = value
        paddingBottom = value
    }

var StandardLonghandProperties.marginX: MarginLeft
    get() = error("not implemented")
    set(value) {
        marginLeft = value
        marginRight = value
    }

var StandardLonghandProperties.marginY: MarginTop
    get() = error("not implemented")
    set(value) {
        marginTop = value
        marginBottom = value
    }

fun <T : PropsWithClassName> ButtonProps.useComponent(
    component: IntrinsicType<T>,
    init: T.() -> Unit = {}
) {
    this.asDynamic().component = component
    init.invoke(this.asDynamic())
}

fun <T : PropsWithClassName> PropsWithComponent.useComponent(
    component: IntrinsicType<T>,
    init: T.() -> Unit = {}
) {
    this.component = component
    init.invoke(this.asDynamic())
}