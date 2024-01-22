package org.baaahs.theme

import csstype.Color
import js.core.jso
import mui.material.PaletteMode
import mui.material.styles.PaletteColor
import mui.material.styles.PaletteOptions

val light = jso<PaletteOptions> {
    asDynamic().alternate = jso {
        this.main = "#f7faff"
        this.dark = "#edf1f7"
    }
    asDynamic().cardShadow = "rgba(23, 70, 161, .11)"
    mode = PaletteMode.light
    primary = jso<PaletteColor> {
        main = Color("#1e2022")
        light = Color("#2f3134")
        dark = Color("#2f3134")
        contrastText = Color("#fff")
    }
    secondary = jso<PaletteColor> {
        light = Color("#ffb74d")
        main = Color("#f9b934")
        dark = Color("#FF9800")
        contrastText = Color("rgba(0, 0, 0, 0.87)")
    }
    text = jso {
        primary = Color("#1e2022")
        secondary = Color("#677788")
    }
    divider = "rgba(0, 0, 0, 0.12)"
    background = jso {
        paper = "#fff8ee"
        default = "#fff8ee"
        asDynamic().level2 = "#f5f5f5"
        asDynamic().level1 = "#fff8ee"
    }
};

val dark = jso<PaletteOptions> {
    asDynamic().alternate = jso {
        this.main = "#1a2138"
        this.dark = "#151a30"
    }
    asDynamic().cardShadow = "rgba(0, 0, 0, .11)"
    common = jso {
        black = Color("#000")
        white = Color("#fff")
    }
    mode = PaletteMode.dark
    primary = jso<PaletteColor> {
        main = Color("#1976d2")
        light = Color("#2196f3")
        dark = Color("#0d47a1")
        contrastText = Color("#fff")
    }
    secondary = jso<PaletteColor> {
        light = Color("#FFEA41")
        main = Color("#FFE102")
        dark = Color("#DBBE01")
        contrastText = Color("rgba(0, 0, 0, 0.87)")
    }
    text = jso {
        primary = Color("#EEEEEF")
        secondary = Color("#AEB0B4")
    }
    divider = "rgba(255, 255, 255, 0.12)"
    background = jso {
        paper = "#222B45"
        default = "#222B45"
//        level2 = "#333"
//        level1 = "#2D3748"
    }
};
