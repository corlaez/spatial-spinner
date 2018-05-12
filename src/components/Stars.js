import React from "react";
import { connect } from "@cerebral/react"
import { state, signal } from "cerebral/tags"
import stark1 from './stark1.png'
import stark2 from './stark2.png'
import stark3 from './stark3.png'
import stark4 from './stark4.png'
import { Text } from "react-pixi-fiber";
import playerDirection from "../computed/playerDirection";
import ImageSprite from "./ImageSprite";

class Stars extends React.Component {
    componentDidMount() {
        this.props.init();
    }
    
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
    },
    Stars
);
