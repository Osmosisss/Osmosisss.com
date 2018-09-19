import React, { Component } from "react";
import SideNav from "./side-nav";
import Logo from "./logo";
import $ from "jquery";

class Home extends Component {
  render() {
    $(function() {
      $(".page-wrapper").css({ height: $(window).height() });

      $(window).bind("resize", function() {
        $(".page-wrapper").css({ height: $(window).height() });
      });
    });
    return (
      <div id="home" className="page-wrapper">
        <SideNav />
        <Logo />
      </div>
    );
  }
}

export default Home;
