package org.baaahs.theme

import externals.mui.material.styles.alpha

fun shadows(themeMode: String = "light"): Array<String> {
    val rgb = if (themeMode === "light") "#8c98a4" else "#000000"

    return arrayOf(
        "none",
        "0 3px 6px 0 ${alpha(rgb, 0.25)}",
        "0 12px 15px ${alpha(rgb, 0.1)}",
        "0 6px 24px 0 ${alpha(rgb, 0.125)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
        "0 10px 40px 10px ${alpha(rgb, 0.175)}",
    )
}