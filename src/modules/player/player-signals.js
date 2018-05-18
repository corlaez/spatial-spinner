import playerRotation from "../../computed/playerRotation";

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
            rotation,
            bulletKey
        }
    }
}

const fireBullet = ({state, resolve}) => {
    const center = state.get('app.window.center')
    const rotation = resolve.value(playerRotation)
    state.merge('app.player.bullets', createBullet(center, rotation))
}

const moveBullet = ({state, resolve, props}) => {
    const bullets = state.get('app.player.bullets')
    const center = state.get('app.window.center')
    const newBullets = {}
    Object.keys(bullets).forEach(key => {
        newBullets[key] = {...bullets[key]}
        newBullets[key].x = bullets[key].x + bullets[key].dx
        newBullets[key].y = bullets[key].y + bullets[key].dy
        newBullets[key].dx *= 1.1
        newBullets[key].dy *= 1.1
        // I THINK THIS WOULD WORK IF 0 WAS MY SHIP BUT THATS NOT THE CASE
        if(newBullets[key].y < 0 || newBullets[key].x < 0)
            delete newBullets[key]
    })
    state.set('app.player.bullets', newBullets)
}

export default {
    fireBullet,
    moveBullet,
}