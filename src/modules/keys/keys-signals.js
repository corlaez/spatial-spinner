
import { set, unset } from 'cerebral/operators'
import { module, props } from 'cerebral/tags'

const setKey = [
    set(module`${props`keyCode`}`, props`value`)
]
const unsetKey = [
    unset(module`${props`keyCode`}`)
]

// signals (public actions or sequences)
export default {
    setKey,
    unsetKey,
}
