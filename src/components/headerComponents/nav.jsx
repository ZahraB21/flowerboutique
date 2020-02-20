import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Nav extends Component {
  state = {
    links: [
      { id: 1, value: "Our Mission" },
      { id: 2, value: "Flowers" },
      { id: 3, value: "Contact Us" }
    ]
  };

  getReference = link => {
    let value = "#";
    if (link.includes(" ")) {
      value = value.concat(link.split(" ").join("_"));
    } else {
      value = value.concat(link);
    }
    return value;
  };

  render() {
    return (
      <div className="collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav mr-auto">
          {this.state.links.map(link => (
            <li className="nav-item text-light" key={link.id}>
              <a
                href={this.getReference(link.value.toLowerCase())}
                className="nav-link text-light"
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
