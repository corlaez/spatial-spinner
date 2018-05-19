import React from "react";
import bullet from "../assets/bullet.png";
import ImageSprite from "./ImageSprite";

class Bullet extends React.Component {
    render() {
        const { x, y, rotation } = this.props
        return (
            <ImageSprite
                image={bullet}
                scale={0.4}
                rotation={rotation}
                x={x}
                y={y}
            />
        );
    }
}

export default Bullet
