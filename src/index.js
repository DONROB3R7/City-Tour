import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

class App extends Component {
  render() {
    return <h1>Our Current App</h1>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
