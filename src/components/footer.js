import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-grid">
        <div className="footer-space" />
        <div className="footer-copyright">
          <p> Osmosis Productions</p>
        </div>
        <div className="footer-social">
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Spotify</a>
        </div>
      </div>
    );
  }
}

export default Footer;
