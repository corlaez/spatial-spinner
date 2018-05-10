import React from 'react';
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { Stage } from "react-pixi-fiber";
import Player from './components/Player';

const options = {
    backgroundColor: 0x000000
}
const App = ({width, height}) => (
  <Stage options={options} width={width} height={height}>
    <Player />
  </Stage>
); 

export default connect({
  width: state`window.size.width`,
  height: state`window.size.height`,
}, App);
