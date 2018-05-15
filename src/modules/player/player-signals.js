import playerRotation from "../../computed/playerRotation";

const createBullet = (center, rotation) => {
    const bulletKey = Math.random() + "$" + rotation;
    return {
        [bulletKey]: {
            x: center.x + 40 * Math.cos(rotation),
            y: center.y + 40 * Math.sin(rotation),
            rotation,
            bulletKey
        }
    };
}

const fireBullet = ({state, resolve}) => {
    const center = state.get('app.window.center')
    const rotation = resolve.value(playerRotation);
    state.merge('app.player.bullets', createBullet(center, rotation))
}

const moveBullet = ({state, resolve, props}) => {
    //const bullet = state.get('app.player.bullets.' + props.key)
    //console.log(bullet)
    /*
    if(bullet)
        state.merge('app.player.bullets', {bullet, x: bullet.x + 5})*/
}

export default {
    fireBullet,
    moveBullet,
}