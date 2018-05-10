
import { set } from 'cerebral/operators'
import { module, props } from 'cerebral/tags'
import { debounceIgnore } from '../helpers'

// actions

// sequences
const createSetPosition = name => [
    set(module`${name}.x`, props`x`),
    set(module`${name}.y`, props`y`),
]
const setCenter = createSetPosition('center')
const setNow = createSetPosition('now')
const setFire = createSetPosition('fire')
const setClick = createSetPosition('click')
const setMouseMove = [setNow, debounceIgnore(1000, setFire)]

// signals (public actions or sequences)
export default {
    setCenter,
    setMouseMove,
    setClick,
}