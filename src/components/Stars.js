import React from "react";
import { connect } from "@cerebral/react"
import { state } from "cerebral/tags"
import stark1 from './stark1.png'
import stark2 from './stark2.png'
import stark3 from './stark3.png'
import stark4 from './stark4.png'
import { Text } from "react-pixi-fiber";
import playerDirection from "../computed/playerDirection";

class Stars extends React.Component {
    render() {
        return (
            <Text 
                x={20} 
                y={20} 
                style={{color: 'white'}} 
                text={JSON.stringify(this.props.direction)}
            />
        )
    }
}

export default connect(
    {
        direction: playerDirection
    },
    Stars
);
