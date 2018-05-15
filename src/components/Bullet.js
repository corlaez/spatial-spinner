import React from "react";
import PropTypes from "prop-types";
import bullet from "../assets/bullet.png";
import ImageSprite from "./ImageSprite";

class Bullet extends React.Component {

    componentDidMount() {
      this.context.app.ticker.add(this.animate);
    }
  
    componentWillUnmount() {
      this.context.app.ticker.remove(this.animate);
    }

    animate = delta => {
        // delta is 1 if running at 100% performance
        // creates frame-independent tranformation
        this.props.move({
            bulletKey: this.props.bulletKey,
            value: 1
        });
    };

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
Bullet.contextTypes = {
  app: PropTypes.object
};

export default Bullet
