import React, { Component } from "react";
import flowers1 from "../../assets/images/flowers1.jpg";
import jamie from "../../assets/images/jamie-coupaud.jpg";
import orio from "../../assets/images/orio-nguyen.jpg";
import kelly from "../../assets/images/kelly-sikkema.jpg";
import elena from "../../assets/images/elena-taranenko.jpg";
import jenna from "../../assets/images/jenna-neal.jpg";

import "bootstrap/dist/css/bootstrap.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class Flowers extends Component {
  state = {
    images: [
      { id: 1, imageName: flowers1 },
      { id: 2, imageName: jamie },
      { id: 3, imageName: orio },
      { id: 4, imageName: kelly },
      { id: 5, imageName: elena },
      { id: 6, imageName: jenna }
    ]
  };
  render() {
    return (
      <section id="flowers">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Flowers For You</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 bg-dark" id="content">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                accusantium accusamus iure ut voluptatum ipsum ad quod nulla,
                impedit nemo repellat ipsa quas magnam eius consequuntur eos
                iusto quaerat corporis.
              </h3>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                similique repudiandae alias ullam vel quo, sint numquam et harum
                ipsum officiis, earum est nisi, reiciendis ipsam fuga nihil
                eaque. Voluptatum!
              </h3>
            </div>
            <div className="col-12 col-lg-6 bg-light">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={6}
                isPlaying={true}
                interval={2500}
              >
                <Slider>
                  {this.state.images.map(image => (
                    <Slide index={image.id - 1} key={image.id}>
                      <div id="slider">
                        <img
                          src={image.imageName}
                          alt="flowers"
                          className="img-fluid"
                          id={"image".concat(image.id)}
                        />
                      </div>
                    </Slide>
                  ))}
                </Slider>
              </CarouselProvider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Flowers;
