package org.baaahs.assman.view

import InputComponent
import addAsset
import deleteAsset
import getAsset
import getAssetList
import kotlinx.coroutines.launch
import org.baaahs.assman.model.Asset
import org.baaahs.util.clock
import org.baaahs.util.scope
import react.FC
import react.Props
import react.dom.html.ReactHTML
import react.useEffectOnce
import react.useMemo
import react.useState

val AssManIndexPage = FC<Props> {
    var assetList by useState(emptyList<Asset>())
    val assetCache = useMemo { HashMap<String, Asset>() }

    useEffectOnce {
        scope.launch {
            assetList = getAssetList().also { assets ->
                assets.forEach { assetCache[it.id] = it }

                assets.mapNotNull { it.containerId }
                    .distinct()
                    .filter { assetCache.contains(it) }
                    .forEach { containerId ->
                        getAsset(containerId)?.let { assetCache[containerId] = it }
                    }
            }
        }
    }

    ReactHTML.h1 {
        +"assman — BAAAHS Asset Manager"
    }
    ReactHTML.table {
        ReactHTML.thead {
            ReactHTML.tr {
                arrayOf("Tag", "Name", "Last Seen", "Where", "By", "While", "In").forEach {
                    ReactHTML.th { +it }
                }
            }
        }

        ReactHTML.tbody {
            assetList.sortedByDescending(Asset::name).forEach { item ->
                val lastScan = item.latestScan
                val container = item.containerId?.let { assetCache[it] }

                ReactHTML.tr {
                    key = item.tag

                    ReactHTML.td { +item.tag }
                    ReactHTML.td { +item.name }
                    ReactHTML.td { +(lastScan?.createdAt?.toString() ?: "") }
                    ReactHTML.td { +(lastScan?.location?.toString() ?: "") }
                    ReactHTML.td { +(lastScan?.user?.name ?: "") }
                    ReactHTML.td { +(lastScan?.event?.name ?: "") }
                    ReactHTML.td { +(container?.name ?: "") }

                    onClick = {
                        scope.launch {
                            deleteAsset(item)
                            assetList = getAssetList()
                        }
                    }
                }
            }
        }
    }
    InputComponent {
        onSubmit = { input ->
            val cartItem = Asset(
                "",
                input.replace("!", ""), input,
                createdAt = clock.now(),
                updatedAt = clock.now()
            )
            scope.launch {
                addAsset(cartItem)
                assetList = getAssetList()
            }
        }
    }

}