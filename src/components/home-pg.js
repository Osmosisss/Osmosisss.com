import React, { Component } from "react";
import SideNav from "./side-nav";
import Logo from "./logo";

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <SideNav />
        <Logo />
      </div>
    );
  }
}

export default Home;
