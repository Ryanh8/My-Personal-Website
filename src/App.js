//import "./App.css";
import ParticleBackground from "./components/ParticleAnimation";
import Slides from "./components/Slides";

import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ParticleBackground />
        <Slides />
      </Fragment>
    );
  }
}

export default App;
