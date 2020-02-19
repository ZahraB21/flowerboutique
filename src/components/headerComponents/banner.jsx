import React, { Component } from "react";
import banner from "../../assets/images/flower-banner.jpg";

import "bootstrap/dist/css/bootstrap.css";

class Banner extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid" id="banner">
        <div className="row">
          <div
            className="col-12 col-lg-4 d-flex flex-column justify-content-center"
            id="banner_col1"
          >
            <div className="row">
              <div className="col-12">
                <h1 className="text-center" id="banner_h1">
                  Your Flower Boutique
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4 className="text-justify" id="banner_h4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat rerum officia, corporis delectus architecto qui
                  itaque nostrum eos labore libero ab dignissimos aspernatur id
                  animi incidunt, natus deleniti inventore ducimus?
                </h4>
                <div id="banner_button">
                  <a
                    href=""
                    className="btn btn-danger btn-small ml-auto mr-auto"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <img
              id="banner_img"
              className="img-fluid"
              src={banner}
              alt="banner image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
