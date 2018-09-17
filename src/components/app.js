import React, { Component } from "react";
import SideNav from "./side-nav";
import Logo from "./logo";

export default class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <Logo />
      </div>
    );
  }
}
