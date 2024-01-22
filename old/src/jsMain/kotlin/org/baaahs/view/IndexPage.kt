package org.baaahs.view

import csstype.Border
import csstype.ClassName
import csstype.VerticalAlign
import csstype.px
import emotion.react.css
import js.core.jso
import org.baaahs.util.sp
import react.FC
import react.Props
import react.dom.html.HTMLAttributes
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.footer
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.header
import react.dom.html.ReactHTML.hgroup
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.span
import web.html.HTMLElement
import web.html.InputType
import web.window.WindowTarget

val IndexPage = FC<Props> {
    div {
        id = "page"
    }
    header {
        css("logotype")
        hgroup {
            css("logotype")
            img {
                css("logo")
                src = "images/logo/BAAAHS2015LogoWithBorder-160x136.png"
                srcSet = "images/logo/BAAAHS2015LogoWithBorder-320x272.png 2x "
            }
            h1 {
                +"B"
                span {
                    css("a")
                    +"AA"
                }
                +"AHS"
            }
            h2 { +"big-ass amazingly awesome homosexual sheep" }
        }
    }

    div {
        css("content")

        div { css("background-gradient") }

        div {
            css("news")
            div { css("top-left tape") }
            div { css("bottom-right tape") }

            h3 { +"BAAAHS is:" }
            p { +"- a mutant vehicle." }
            p { +"- a mobile disco." }
            p { +"- a penetrable social statement." }

//    <!--
//    <h3>Debut:</h3>
//    <p>Black Rock City, August 2013.</p>
//
//    <h3>Why a sheep?</h3>
//    <p>We'll tell you when we're ready.</p>
//    -->

            h3 { +"Wanna help?" }
            p { +"Join the flock:" }

            form {
                action = "https://www.paypal.com/cgi-bin/webscr"
                method = "post"
                target = "_top" as WindowTarget

                input {
                    type = InputType.hidden
                    name = "cmd"
                    value = "_s-xclick"
                }
                input {
                    type = InputType.hidden
                    name = "hosted_button_id"
                    value = "SLY9D5JBTPCLS"
                }
                p {
                    a {
                        href = "volunteer2015.html"
                        +"Volunteer"
                    }
                    +Typography.nbsp.toString()
                    +"…or…"
                    +Typography.nbsp.toString()
                    input {
                        css {
                            border = "0" as Border
                        }
                        type = InputType.image
                        src = "https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
                        name = "submit"
                        alt = "PayPal - The safer, easier way to pay online!"
                        style = jso {
                            verticalAlign = VerticalAlign.middle
                        }
                    }
                    img {
                        alt = ""
                        css {
                            border = 0.px
                        }
                        src = "https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                        width = 1.sp
                        height = 1.sp
                    }
                }
            }

            h3 { +"Contact:" }
            p {
                a {
                    href = "mailto:info@baaahs.org"
                    +"info@baaahs.org"
                }
            }

            h3 { +"Follow us on the Facebook!" }
            div {
                css("fb-like-box")
//                attr["data-href"] = "https://www.facebook.com/pages/BAAAHS/518336291541584"
//                attr["data-width"] = "240"
//                attr["data-show-faces"] = "false"
//                attr["data-stream"] = "false"
//                attr["data-header"] = "false"
//                attr["data-border-color"] = "none"
            }
        }

        div {
            css("polaroids")
            div {
                css("polaroid fade-in")
                img {
                    src = "images/folsom-2014.png"
                    alt = "Folsom — 2014"
                }
            }
            div {
                css("polaroid fade-in")
                img {
                    src = "images/honey-dusted-2014.png"
                    alt = "Honey Dusted Morning — 2014" }
            }
            div {
                css("polaroid fade-in")
                img {
                    src = "images/leather-night-2014.jpg"
                    alt = "Leather Night — 2014 — Photo by Dimitri Geier"
                }
            }
            div {
                css("polaroid fade-in")
                img {
                    src = "images/playa-daytime-2014.jpg"
                    alt = "Grazing the Playa — 2014 — Photo by Louisa Corbett"
                }
            }
        }
    }

    footer {}
}

private fun HTMLAttributes<out HTMLElement>.css(className: String) {
    css(ClassName(className)) {}
}