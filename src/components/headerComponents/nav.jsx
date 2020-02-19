import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Nav extends Component {
  state = {
    links: [
      { id: 1, value: "Our Mission" },
      { id: 2, value: "Plants" },
      { id: 3, value: "Contact Us" }
    ]
  };
  render() {
    return (
      <div className="collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav mr-auto">
          {this.state.links.map(link => (
            <li className="nav-item" key={link.id}>
              <a
                href={"#".concat(
                  link.value
                    .toLowerCase()
                    .split(" ")
                    .join("")
                )}
                className="nav-link"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;
