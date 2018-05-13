import playerRotation from "../../computed/playerRotation";

const createBullet = (center, rotation) => ({
    x: center.x + 40 * Math.cos(rotation),
    y: center.y + 40 * Math.sin(rotation),
    rotation,
    key: Math.random() + "$" + rotation,
})

const fireBullet = ({state, resolve}) => {
    console.log(resolve)
    const center = state.get('app.window.center')
    const rotation = resolve.value(playerRotation);
    state.push('app.player.bullets', createBullet(center, rotation))
}

export default {
    fireBullet
}