import React, { Component } from "react";

import Carousel from "./carousel";

import "bootstrap/dist/css/bootstrap.css";

class Mission extends Component {
  state = {};
  render() {
    return (
      <section id="our_mission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Our Mission</h1>
              <h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                provident. Impedit sequi placeat sed architecto doloribus ipsam
                ratione, nemo, adipisci provident natus, ea obcaecati
                repudiandae animi! Impedit atque facere libero. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </h4>
            </div>
          </div>
        </div>
        <Carousel />
      </section>
    );
  }
}

export default Mission;
