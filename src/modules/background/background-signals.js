

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

export default {
    init
}