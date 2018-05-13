import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

const playerRotation = Compute(
    state`app.window.center`,
    state`app.mouse.now`,
    (center, mouse) => {
        const dx = mouse.x - center.x
        const dy = mouse.y - center.y
        const rotation = Math.atan2(dy, dx)
        return rotation
    }
)
  
export default playerRotation
