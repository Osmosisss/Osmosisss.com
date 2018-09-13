import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-grid">
        <div className="header-logo">
          <img src="assets/osmosisss_logo.png" alt="Osmosisss.com" />
        </div>
        <div className="header-links">
          <a className="links">Home</a>
          <a className="links">Music</a>
          <a className="links">Art</a>
          <a className="links">Support</a>
        </div>
      </div>
    );
  }
}

export default Header;
