import { debounce } from 'cerebral/operators'

export const debounceIgnore = (ms, success) => [
    debounce(ms),
    {
        continue: success,
        discard: []// TODO: clearer error here. Null is not valid.
        // instead of: FunctionTreeError: Unexpected entry in tree
    }
]