import React, { Component } from "react";
import HeroTxt from "./hero-txt";
import SideNav from "./side-nav";
import Logo from "./logo";

export default class App extends Component {
  render() {
    return (
      <div>
        <HeroTxt />
        <SideNav />
        <Logo />
      </div>
    );
  }
}
