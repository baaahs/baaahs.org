package org.baaahs

import csstype.BackgroundColor
import csstype.BorderColor
import csstype.Color
import js.core.jso
import react.FC
import react.PropsWithChildren
import react.dom.html.ReactHTML.div

val ToDo = FC<PropsWithChildren> { props ->
    div {
        style = jso {
            backgroundColor = "pink" as BackgroundColor
            borderColor = "darkred" as BorderColor
            color = Color("black")
        }
        +"TODO: "
        +props.children
    }
}
