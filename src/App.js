import React from 'react';
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { Stage } from "react-pixi-fiber";
import Player from './components/Player';
import Stars from './components/Stars';

const options = {
    //backgroundColor: 0x000000
}
const App = ({width, height}) => (
  <Stage options={options} width={width - 20} height={height - 20}>
    <Stars/>
    <Player />
  </Stage>
); 

export default connect({
  width: state`app.window.size.width`,
  height: state`app.window.size.height`,
}, App);
