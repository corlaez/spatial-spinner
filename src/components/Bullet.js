import React from "react";
import { connect } from "@cerebral/react"
import { state } from 'cerebral/tags'
import bullet from "../assets/bullet.png";
import ImageSprite from "./ImageSprite";
import playerRotation from "../computed/playerRotation";
import isMouseDown from "../computed/isMouseDown";

class Bullet extends React.Component {
    render() {
        const { center, otherProps, rotation } = this.props
        return (
            <ImageSprite
                x={center.x + 40 * Math.cos(rotation)}
                y={center.y + 40 * Math.sin(rotation)}
                image={bullet}
                rotation={rotation}
                scale={0.4}
            />
        );
    }
}

export default connect(
    {
        center: state`app.window.center`,
        rotation: playerRotation,
    },
    Bullet
);
