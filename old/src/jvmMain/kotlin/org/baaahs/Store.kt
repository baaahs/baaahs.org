package org.baaahs

import org.baaahs.assman.model.Asset
import org.litote.kmongo.coroutine.CoroutineCollection

interface Store {
    val assets: CoroutineCollection<Asset>
}