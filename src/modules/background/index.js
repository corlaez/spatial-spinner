import { Module } from 'cerebral'
import signals from './background-signals'

const background = Module({
    state: {
        stars: []
    },
    signals
})

export default background;