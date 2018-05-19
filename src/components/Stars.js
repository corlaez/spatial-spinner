import React from "react";
import PropTypes from "prop-types";
import { connect } from "@cerebral/react"
import { state, signal } from "cerebral/tags"
import ImageSprite from "./ImageSprite";
import stark1 from '../assets/stark1.png'/*
import stark2 from '../assets/stark2.png'
import stark3 from '../assets/stark3.png'
import stark4 from '../assets/stark4.png'*/
import playerDirection from "../computed/playerDirection";

class Stars extends React.Component {
    static contextTypes = {
        app: PropTypes.object
    };

    componentDidMount() {
        this.props.init();
        this.context.app.ticker.add(this.animate);
    }
  
    componentWillUnmount() {
        this.context.app.ticker.remove(this.animate);
    }

    animate = delta => {
        // delta is 1 if running at 100% performance
        // creates frame-independent tranformation
        const { moveStars, playerDirection } = this.props
        moveStars({ playerDirection });
    };
    
    render() {
        return this.props.stars.map(star =>
            <ImageSprite
                key={star.key}
                image={stark1}  
                x={star.x}
                y={star.y}
                scale={star.scale}
            />
        )
    }

}

export default connect(
    {
        stars: state`app.background.stars`,
        init: signal`app.background.init`,
        moveStars: signal`app.background.moveStars`,
        playerDirection,
    },
    Stars
);
