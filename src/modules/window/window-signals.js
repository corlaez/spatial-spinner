import {module, props} from 'cerebral/tags'
import {set} from 'cerebral/operators'

const setSize = [
    set(module`size.width`,props`width`),
    set(module`size.height`,props`height`),
]

const center = ({window, controller}) => {
    const setCenter = controller.getSignal('app.mouse.setCenter')
    const setSize = controller.getSignal('app.window.setSize')
    const onResize = () => {
        const x = window.innerWidth / 2
        const y = window.innerHeight / 2
        setSize({width: window.innerWidth, height: window.innerHeight})
        setCenter({x, y})
    }
    onResize()
    window.onresize = onResize
}

const mouseMove = ({window, controller}) => {
    const setMouseMove = controller.getSignal('app.mouse.setMouseMove')
    window.onmousemove = e => {
        const {x, y} = e
        setMouseMove({x, y})
    }
}

const mouseClick = ({window, controller}) => {
    const setClick = controller.getSignal('app.mouse.setClick')
    window.onmousedown = e => {
        const {x, y} = e
        setClick({x, y})
    }
    window.onmouseup = e => {
        setClick({x: null, y: null})
    }
}

const initMouse = [center, mouseMove, mouseClick]

const initKeys = ({window, controller}) => {
    const setKey = controller.getSignal('app.keys.setKey')
    const unsetKey = controller.getSignal('app.keys.unsetKey')
    window.onkeydown = e => {
        const {keyCode, key, shiftKey} = e
        setKey({
            keyCode, 
            value: {
                keyCode,
                key, 
                shiftKey
            }
        })
    }
    window.onkeyup = e => {
        const {keyCode} = e
        unsetKey({keyCode})
    }
}

const init = [initMouse, initKeys]

export default {
    init,
    setSize
}