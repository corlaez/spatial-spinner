import { Module } from 'cerebral'
import signals from './mouse-signals'

const mouse = Module({
    state: {
        click: {},
        fire: {},
        now: {},
    },
    signals
})

export default mouse;