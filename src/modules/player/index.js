import { Module } from 'cerebral'
import signals from './player-signals'

const player = Module({
    state: {
        bullets: {}
    },
    signals
})

export default player;