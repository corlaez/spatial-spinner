import React from "react";
import { connect } from "@cerebral/react"
import { state } from "cerebral/tags"
import stark1 from './stark1.png'
import stark2 from './stark2.png'
import stark3 from './stark3.png'
import stark4 from './stark4.png'
import { Sprite } from "pixi.js";
import playerDirection from "../computed/playerDirection";

class Stars extends React.Component {
    render() { return null/*
        const {center, mouse} = this.props
        const dx = mouse.x - center.x
        const dy = mouse.y - center.y
        const rotation = Math.atan2(dy, dx) + Math.PI / 2;
        return (
            <Sprite x={center.x} y={center.y} rotation={rotation}/>
        );*/
    }
}

export default connect(
  {
    direction: playerDirection
  },
  Stars
);
