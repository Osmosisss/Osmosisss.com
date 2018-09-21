import React, { Component } from "react";
import Home from "./home-pg";
import About from "./about-pg";

export default class Osmosis extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
