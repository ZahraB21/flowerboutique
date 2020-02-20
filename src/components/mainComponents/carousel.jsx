import React, { Component } from "react";
import bride from "../../assets/images/bride.jpg";
import car from "../../assets/images/car.jpg";
import table from "../../assets/images/table.jpg";

class Carousel extends Component {
  state = {
    images: [
      { id: 1, value: car },
      { id: 2, value: bride },
      { id: 3, value: table }
    ]
  };
  render() {
    return (
      <div className="container-fluid" id="carousel">
        <div className="row">
          {this.state.images.map(image => {
            return (
              <div className="col-12 col-lg-4 ml-auto mr-auto justify-content-between">
                <img
                  id={"image".concat(image.id)}
                  src={image.value}
                  alt=""
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
