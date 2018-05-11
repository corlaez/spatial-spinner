import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import bunny from "./player.png";
import p2 from "./player2.png";

const centerAnchor = new PIXI.Point(0.5, 0.5);
//const bunny = "https://i.imgur.com/IaUrttj.png";

function Bunny(props) {
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.fromImage(p2)}
      {...props}
    />
  );
}

export default Bunny
