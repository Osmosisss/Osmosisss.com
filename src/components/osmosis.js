import React, { Component } from "react";
import Home from "./home-pg";
import About from "./about-pg";
import Art from "./art-pg";
import Support from "./support-pg";
import Contact from "./contact-pg";

export default class Osmosis extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Art />
        <Support />
        <Contact />
      </div>
    );
  }
}
