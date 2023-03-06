package org.baaahs.util

import js.core.jso
import kotlinx.coroutines.MainScope
import kotlinx.datetime.Clock

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
