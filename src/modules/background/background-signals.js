const createStar = (key, screenSize) => ({
    x: Math.random() * screenSize.width - 20,
    y: Math.random() * screenSize.height - 20,
    scale: Math.random() / 4,
    key,
})

const init = ({state}) => {
    const screenSize = state.get('app.window.size')
    for(let i = 0; i < 20; i++)
        state.push('app.background.stars', createStar(i, screenSize))
}

const moveStars = ({props, module}) => {
    if(!props.playerDirection) {
        return
    }
    const {xSign, ySign} = props.playerDirection
    const stars = module.get('stars')
    const newStars = stars.map(e => ({
        ...e,
        // -1: our stars go against the playerDirection
        x: e.x + e.scale * 40 * xSign * -1,
        y: e.y + e.scale * 40 * ySign * -1,
    })) // TODO: CLEANUP AND CREATE NEW RANDOM STARS (OR LOOP)
    module.set('stars', newStars)
}

export default {
    init,
    moveStars
}
