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
        <nav class="quick-nav">
          <a class="quick-nav-item" href="#top">
            <i class="fa fa-circle" />
            <span class="quick-nav-title">Home</span>
          </a>
          <a class="quick-nav-item" href="#section1">
            <i class="fa fa-circle" />
            <span class="quick-nav-title">About</span>
          </a>
          <a class="quick-nav-item" href="#section2">
            <i class="fa fa-circle" />
            <span class="quick-nav-title">Art</span>
          </a>
          <a class="quick-nav-item" href="#section3">
            <i class="fa fa-circle" />
            <span class="quick-nav-title">Support</span>
          </a>
          <a class="quick-nav-item" href="#section4">
            <i class="fa fa-circle" />
            <span class="quick-nav-title">Contact</span>
          </a>
        </nav>
        <Home />
        <About />
        <Art />
        <Support />
        <Contact />
      </div>
    );
  }
}
