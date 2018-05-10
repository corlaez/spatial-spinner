import { Module } from 'cerebral'
import signals from './window-signals'
import providers from './window-providers'

const window = Module({
    state: {
        size: {
            width: 0, 
            height: 0,
        }
    },
    signals,
    providers
})

export default window;