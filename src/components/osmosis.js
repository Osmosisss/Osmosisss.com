import React, { Component } from "react";
import $ from "jquery";
import Home from "./home-pg";
import About from "./about-pg";
import Art from "./art-pg";
import Support from "./support-pg";
import Contact from "./contact-pg";
import SideNav from "./side-nav";

export default class Osmosis extends Component {
  render() {
    $(function() {
      $(".page-wrapper").css({ height: $(window).height() });

      $(window).bind("resize", function() {
        $(".page-wrapper").css({ height: $(window).height() });
      });
    });
    return (
      <div>
        <SideNav />
        <Home />
        <About />
        <Art />
        <Support />
        <Contact />
      </div>
    );
  }
}
