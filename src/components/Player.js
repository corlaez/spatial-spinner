import React from "react";
import { connect } from "@cerebral/react"
import { state } from "cerebral/tags"
import Bunny from "./Bunny";

class Player extends React.Component {
    render() {
        const {x, y, mouse} = this.props
        const dx = mouse.x - x
        const dy = mouse.y - y
        console.log(Math.atan(dy / dx))
        const rotation = Math.atan(dy / dx) - Math.PI / 2;
        return (
            <Bunny x={x} y={y} rotation={rotation}/>
        );
    }
}

export default connect(
  {
    x: state`mouse.center.x`,
    y: state`mouse.center.y`,
    mouse: state`mouse.now`
  }, 
  Player
);
