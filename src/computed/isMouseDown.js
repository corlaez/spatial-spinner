import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'

const isMouseDown = Compute(
    state`app.mouse.click`,
    (click) => {
        return click.x != null && click.x != null
    }
)
  
export default isMouseDown
