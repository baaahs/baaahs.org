package org.baaahs

import csstype.Color
import csstype.NamedColor
import js.core.jso
import react.FC
import react.PropsWithChildren
import react.dom.html.ReactHTML.div

val ToDo = FC<PropsWithChildren> { props ->
    div {
        style = jso {
            backgroundColor = NamedColor.pink
            borderColor = NamedColor.darkred
            color = Color("black")
        }
        +"TODO: "
        +props.children
    }
}
