import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
//import bunny from "./player.png";

const centerAnchor = new PIXI.Point(0.5, 0.5);
const bunny = "https://i.imgur.com/IaUrttj.png";

function Bunny(props) {
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.fromImage(bunny)}
      {...props}
    />
  );
}

export default Bunny
