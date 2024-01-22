package org.baaahs.theme

import externals.mui.material.responsiveFontSizes
import js.core.jso
import mui.material.styles.Theme
import mui.material.styles.createTheme

fun getTheme(mode: String, themeToggler: () -> Unit): Theme =
    responsiveFontSizes(
        createTheme(jso {
            palette = if (mode == "light") light else dark
            shadows = shadows(mode)
            typography = jso {
                fontFamily = "\"Inter\", sans-serif"
                button = jso {
                    textTransform = "none"
                    fontWeight = "medium"
                }
            }
            zIndex = jso {
                appBar = 1200
                drawer = 1300
            }
            components = jso {
                MuiButton = jso {
                    styleOverrides = jso {
                        root = jso {
                            fontWeight = 400
                            borderRadius = 5
                            paddingTop = 10
                            paddingBottom = 10
                        }
                        containedSecondary =
                            if (mode == "light") jso { color = "white" } else jso {}
                    }
                }
                MuiInputBase = jso {
                    styleOverrides = jso {
                        root = jso {
                            borderRadius = 5
                        }
                    }
                }
                MuiOutlinedInput = jso {
                    styleOverrides = jso {
                        root = jso {
                            borderRadius = 5
                        }
                        input = jso {
                            borderRadius = 5
                        }
                    }
                }
                MuiCard = jso {
                    styleOverrides = jso {
                        root = jso {
                            borderRadius = 8
                        }
                    }
                }
            }

            asDynamic().themeToggler = themeToggler
        })
    )