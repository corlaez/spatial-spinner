import React from "react";
import { connect } from "@cerebral/react"
import { state, signal } from "cerebral/tags"
import ImageSprite from "./ImageSprite";
import image from "../assets/player3.png";
import playerRotation from "../computed/playerRotation";
import Bullet from "./Bullet";

//const bunny = "https://i.imgur.com/IaUrttj.png";

class Player extends React.Component {
    render() {
        const { center, rotation, bullets, moveBullet } = this.props
        return (
            <React.Fragment>
                <ImageSprite
                    image={image}
                    x={center.x} 
                    y={center.y} 
                    rotation={rotation}
                />
                {Object.keys(bullets).map(key => <Bullet {...bullets[key]} move={moveBullet}/>)}
            </React.Fragment>
        );
    }
}

export default connect(
    {
      center: state`app.window.center`,
      bullets: state`app.player.bullets`,
      moveBullet: signal`app.player.moveBullet`,
      rotation: playerRotation
    }, 
    Player
);
