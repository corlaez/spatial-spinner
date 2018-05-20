
import React from "react";
import { AnimatedSprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const centerAnchor = new PIXI.Point(0.5, 0.5);

function ArraySprite(props) {
    const { array, ...restOfProps } = props
    const frames = [];
    for (let i = 0; i < array.length; i++) {
        frames.push(PIXI.Texture.fromImage(array[i]));
    }
    const anim = new PIXI.extras.AnimatedSprite(frames);
    return (
        <AnimatedSprite
            anchor={centerAnchor}
            texture={frames[0]}
            {...restOfProps}
        />
    );
}

export default ArraySprite