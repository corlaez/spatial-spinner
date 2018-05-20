import playerRotation from "../../computed/playerRotation";
import playerDirection from "../../computed/playerDirection";

const createBullet = (center, rotation) => {
    const bulletKey = Math.random() + "$" + rotation
    const dx = Math.cos(rotation)
    const dy = Math.sin(rotation)
    const x = center.x + 40 * dx
    const y = center.y + 40 * dy
    return {
        [bulletKey]: {
            x,
            y,
            dx,
            dy,
            odx: dx,
            ody: dy,
            rotation,
            bulletKey,
        }
    }
}

const fireBullet = ({state, resolve}) => {
    const center = state.get('app.window.center')
    const rotation = resolve.value(playerRotation)
    state.merge('app.player.bullets', createBullet(center, rotation))
}

const bulletMovement = ({state, resolve, props}) => {
    const bullets = state.get('app.player.bullets')
    const center = state.get('app.window.center')
    const newBullets = {}
    Object.keys(bullets).forEach(key => {
        newBullets[key] = {...bullets[key]}
        newBullets[key].x = bullets[key].x + bullets[key].dx
        newBullets[key].y = bullets[key].y + bullets[key].dy
        newBullets[key].dx *= 1.05
        newBullets[key].dy *= 1.05
        // I THINK THIS WOULD WORK IF 0 WAS MY SHIP BUT THATS NOT THE CASE
        if(newBullets[key].y < 0 || newBullets[key].x < 0)
            delete newBullets[key]
    })
    state.set('app.player.bullets', newBullets)
}

const bulletMovesByPlayerMovement = ({state, resolve}) => {
    const direction = resolve.value(playerDirection)
    if(!direction) {
        return
    }
    const {xSign, ySign} = direction
    const bullets = state.get('app.player.bullets')
    const newBullets = {}
    Object.keys(bullets).forEach(key => {
        const e = bullets[key]
        newBullets[key] = {...e}
        let dx, dy
        if(e.dx > 0) {
            dx = (e.odx + 1) * xSign * -1
            newBullets[key].x = e.x + dx
        }
        else {
            dx = (e.odx - 1) * xSign
            newBullets[key].x = e.x + dx
        }
        if(e.dy > 0) {
            dy = (e.ody + 1) * ySign * -1
            newBullets[key].y = e.y + dy
        }
        else {
            dy = (e.ody - 1) * ySign
            newBullets[key].y = e.y + dy
        }
    }) 
    state.set('app.player.bullets', newBullets)
}

const moveBullet = [
    bulletMovesByPlayerMovement,
    bulletMovement,
]

export default {
    fireBullet,
    moveBullet,
}