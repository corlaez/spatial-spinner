import React from "react";
import { connect } from "@cerebral/react"
import { state, signal } from "cerebral/tags"
import ImageSprite from "./ImageSprite";
import image from "../assets/player3.png";
import playerRotation from "../computed/playerRotation";
import Bullet from "./Bullet";
import PropTypes from "prop-types";

//const bunny = "https://i.imgur.com/IaUrttj.png";

class Player extends React.Component {
    static contextTypes = {
        app: PropTypes.object
    };

    componentDidMount() {
        window.document.addEventListener(
            "contextmenu", 
            (e) => e.preventDefault(), 
            false
        );
        this.context.app.ticker.add(this.animate);
    }
  
    componentWillUnmount() {
        this.context.app.ticker.remove(this.animate);
    }

    animate = delta => {
        // delta is 1 if running at 100% performance
        // creates frame-independent tranformation
        this.props.moveBullet();
        this.props.moveBullet();
    };

    render() {
        const { center, rotation, bullets } = this.props
        return (
            <React.Fragment>
                <ImageSprite
                    image={image}
                    x={center.x} 
                    y={center.y} 
                    rotation={rotation}
                />
                {Object.keys(bullets).map(key => <Bullet key={key} {...bullets[key]}/>)}
            </React.Fragment>
        );
    }
}

export default connect(
    {
      center: state`app.window.center`,
      bullets: state`app.player.bullets`,
      moveBullet: signal`app.player.moveBullet`,
      rotation: playerRotation,
    },
    Player
);
