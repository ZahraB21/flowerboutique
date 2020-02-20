import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

class Flowers extends Component {
  state = {};
  render() {
    return (
      <section id="flowers">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>this is the Flowers Section</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Flowers;
