import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

const playerDirection = Compute(
  state`app.keys`,
  (keys) => {
    const left = Object.keys(keys).includes(37)
    const up = Object.keys(keys).includes(38)
    const right = Object.keys(keys).includes(39)
    const down = Object.keys(keys).includes(40)
    const simpleDirections = {
        up: up && !down,        
        down: down && !up,
        right: right && !left,
        left: left && !right,
    }
  }
)
  
export default playerDirection;
