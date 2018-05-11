import React from "react";
import { connect } from "@cerebral/react"
import { state } from "cerebral/tags"
import Bunny from "./Bunny";

class Player extends React.Component {
    render() {
        const {center, mouse} = this.props
        const dx = mouse.x - center.x
        const dy = mouse.y - center.y
        const rotation = Math.atan2(dy, dx) + Math.PI / 2;
        return (
            <Bunny x={center.x} y={center.y} rotation={rotation}/>
        );
    }
}

export default connect(
  {
    center: state`mouse.center`,
    mouse: state`mouse.now`
  }, 
  Player
);
