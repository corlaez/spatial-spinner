import React from "react";
import { connect } from "@cerebral/react"
import { state } from "cerebral/tags"
import ImageSprite from "./ImageSprite";
import image from "../assets/player3.png";
import playerRotation from "../computed/playerRotation";
import Bullet from "./Bullet";

//const bunny = "https://i.imgur.com/IaUrttj.png";

class Player extends React.Component {
    render() {
        const { center, rotation } = this.props
        return (
            <React.Fragment>
                <ImageSprite
                    image={image}
                    x={center.x} 
                    y={center.y} 
                    rotation={rotation}
                />
                <Bullet/>
            </React.Fragment>
        );
    }
}

export default connect(
    {
      center: state`app.window.center`,
      rotation: playerRotation
    }, 
    Player
);
