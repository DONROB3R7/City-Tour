import React, { Component } from "react";
import ReactDOM from "react-dom";
import london from "../src/Img/london.jpeg";
import Navbar from "./components/Navbar/NavBar";
import TourList from "./components/TourList";

import "./styles.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
