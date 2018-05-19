import { debounceIgnore, createSetPosition } from '../helpers'

// actions

// sequences
const setNow = createSetPosition('now')
const setFire = createSetPosition('fire')
const setClick = [
    createSetPosition('click'),
    ({props, controller}) => {
        if(props.x != null && props.y != null)
            controller.getSignal('app.player.fireBullet')()
    }
]
const setMouseMove = [setNow, debounceIgnore(1000, setFire)]

// signals (public actions or sequences)
export default {
    setMouseMove,
    setClick,
}