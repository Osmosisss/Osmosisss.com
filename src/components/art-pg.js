import React, { Component } from "react";
import SideNav from "./side-nav";
import Logo from "./logo";

class Art extends Component {
  render() {
    return (
      <div id="art" className="page-wrapper">
        <SideNav />
        <Logo />
      </div>
    );
  }
}

export default Art;
