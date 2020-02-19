import React, { Component } from "react";
import Nav from "./nav";

import "bootstrap/dist/css/bootstrap.css";

class Navbar extends Component {
  state = {};
  styles = {
    backgroundColor: "#fdf9fa"
  };

  render() {
    return (
      <div className="container-fluid" style={this.styles}>
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-dark navbar-light">
              <a href="index.html" className="navbar-brand text-light">
                FB
              </a>
              <button
                className="navbar-toggler bg-light"
                type="button"
                data-toggle="collapse"
                data-target="#navLinks"
                aria-controls="navLinks"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <Nav />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
