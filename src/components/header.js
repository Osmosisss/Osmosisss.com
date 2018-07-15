import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="logo-yo">
          <img src="./assets/logo.png" alt="Osmosisss" />
        </div>
        <div className="links-yo">
          <ul className="links">
            <li>Portfolio</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
