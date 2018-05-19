import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

const playerDirection = Compute(
    state`app.keys`,
    (keys) => {
        const left = Object.keys(keys).includes("37")
        const up = Object.keys(keys).includes("38")
        const right = Object.keys(keys).includes("39")
        const down = Object.keys(keys).includes("40")
        if(!up && !down && !left && !right)
            return null
        let xSign = 0
        let ySign = 0
        if (up && !(up && down)) {
            ySign = -1
        } else if(down && !(up && down)) {
            ySign = 1
        }
        if (left && !(left && right)) {
            xSign = -1
        } else if(right && !(left && right)) {
            xSign = 1
        }
        return {
            xSign,
            ySign,
        }
    }
)
  
export default playerDirection;
