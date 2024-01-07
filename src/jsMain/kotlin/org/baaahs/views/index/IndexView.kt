package org.baaahs.views.index

import Foopz
import csstype.BackgroundImage
import csstype.BackgroundRepeat
import csstype.Overflow
import csstype.Position
import csstype.pct
import externals.mui.material.styles.alpha
import mui.material.Box
import mui.material.Container
import mui.material.styles.Theme
import mui.material.styles.useTheme
import mui.system.sx
import org.baaahs.layouts.main.Main
import org.baaahs.util.useComponent
import org.baaahs.views.index.components.Events
import org.baaahs.views.index.components.Features
import org.baaahs.views.index.components.GetStarted
import org.baaahs.views.index.components.Hero
import org.baaahs.views.index.components.Music
import org.baaahs.views.index.components.QuickStart
import org.baaahs.views.index.components.Services
import react.FC
import react.Props
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg

val IndexView = FC<Props> {
    val theme = useTheme<Theme>()

    Box {
        sx {
            overflowX = Overflow.hidden
        }

        Main {
            bgcolor = "background.paper"

            Hero {}

            Container {
                Services {}
            }
            Box {
                sx {
                    backgroundImage = "linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0)}, ${alpha(theme.palette.asDynamic().alternate.main, 1)} 100%)" as BackgroundImage
                    backgroundRepeat = BackgroundRepeat.repeatX
                    position = Position.relative
                }

                Container {
                    maxWidth = "600"
                    QuickStart {}
                }
                Container { Foopz {} }
                Container { Music {} }
                Container { Events {} }
                Container { Features {} }
                Box {
                    useComponent(svg) {
                        preserveAspectRatio = "none"
                        xmlns = "http://www.w3.org/2000/svg"
                        x = 0.0
                        y = 0.0
                        viewBox = "0 0 1920 100.1"
                    }
                    sx {
                        width = 100.pct
                        marginBottom = theme.spacing(-1)
                    }

                    path {
                        fill = theme.palette.background.paper
                        d = "M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                    }
                }
            }
            Container {
                GetStarted {}
            }
        }
    }

}