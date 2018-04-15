import React, { Component } from "react";
import { Motion, spring } from "react-motion";

class App extends Component {
  render() {
    return (
      <div>
        App
        <Motion defaultStyle={{ x: 5 }} style={{ x: spring(1000) }}>
          {value => <div>{value.x}</div>}
        </Motion>
      </div>
    );
  }
}

export default App;
