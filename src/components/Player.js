import React from "react";
import { connect } from "@cerebral/react"
import { state } from "cerebral/tags"
import ImageSprite from "./ImageSprite";
import p2 from "./player2.png";
//const bunny = "https://i.imgur.com/IaUrttj.png";

class Player extends React.Component {
    render() {
        const {center, mouse} = this.props
        const dx = mouse.x - center.x
        const dy = mouse.y - center.y
        const rotation = Math.atan2(dy, dx) + Math.PI / 2;
        return (
            <ImageSprite
                image={p2}
                x={center.x} 
                y={center.y} 
                rotation={rotation}
            />
        );
    }
}

export default connect(
    {
      center: state`app.mouse.center`,
      mouse: state`app.mouse.now`,
    }, 
    Player
);
