import React, { Component } from "react";
import SideNav from "./side-nav";
import Logo from "./logo";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="page-wrapper">
        <SideNav />
        <Logo />
      </div>
    );
  }
}

export default Contact;
