import React, { Component } from "react";
import banner from "../../images/banner.jpg";

import "bootstrap/dist/css/bootstrap.css";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg4">
            <h1>Your Flower Boutique</h1>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              rerum officia, corporis delectus architecto qui itaque nostrum eos
              labore libero ab dignissimos aspernatur id animi incidunt, natus
              deleniti inventore ducimus?
            </h3>
          </div>
          <div className="col-12 col-lg-8">
            <img className="img-fluid" src={banner} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
