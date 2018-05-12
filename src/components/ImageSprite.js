import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const centerAnchor = new PIXI.Point(0.5, 0.5);

function ImageSprite(props) {
    const { image, ...restOfProps } = props
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.fromImage(image)}
      {...restOfProps}
    />
  );
}

export default ImageSprite
