package org.baaahs.util

import org.litote.kmongo.id.UUIDStringIdGenerator

fun <T> newId() = UUIDStringIdGenerator.generateNewId<T>().toString()