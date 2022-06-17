import React from 'react';
import { VictoryScatter, VictoryChart, VictoryLine, VictoryAxis } from "victory";

const Graphica =()=>{
  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
          fill: 'white',
        },
      },
    },
  };
  return(
  <div>
    <VictoryChart theme={ chartTheme }>
      <VictoryScatter y={(data) => Math.sin(2 * Math.PI * data.x)} samples={25} size={5} style={{ data: { fill: "white" }}}/>
      <VictoryLine style={{ data: { stroke: "orange" }}} y={(data) => Math.sin(2 * Math.PI * data.x)} />
      <VictoryAxis/>
      <VictoryAxis dependentAxis/>
    </VictoryChart>
  </div>
  )
}

export default Graphica;