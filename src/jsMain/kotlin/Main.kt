import react.create
import react.dom.client.createRoot
import web.dom.document

fun main() {
    val container = document.getElementById("root") ?: error("Couldn't find container!")
    createRoot(container).render(org.baaahs.App.create())
}