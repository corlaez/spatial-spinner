import { set, debounce } from 'cerebral/operators'
import { module, props } from 'cerebral/tags'

export const debounceIgnore = (ms, success) => [
    debounce(ms),
    {
        continue: success,
        discard: []// TODO: clearer error here. Null is not valid.
        // instead of: FunctionTreeError: Unexpected entry in tree
    }
]

export const createSetPosition = name => [
    set(module`${name}.x`, props`x`),
    set(module`${name}.y`, props`y`),
]