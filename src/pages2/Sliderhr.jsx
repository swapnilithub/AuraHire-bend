import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "../styles2/Sliderhr.css";

const Sliderhr = () => {
  const settings = {
    speed: 1000,
    autoplaySpeed: 2300,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero-slider">
      <div className="slider-item slider-item-01">
        <SliderContent>
          <div className="slider-content">
            <h4 className="text-light mb-3"></h4>
            <h1 className="text-light mb-4">Welcome to Aura<strong>Hire</strong></h1>

            <button className="btn reserve-btn mt-4">
              <Link to="/cars">Add Comment</Link>
            </button>
          </div>
        </SliderContent>
      </div>

      <div className="slider-item slider-item-02">
        <SliderContent>
          <div className="slider-content">
            <h4 className="text-light mb-3"></h4>
            <h1 className="text-light mb-4">Easy hiring with Aura<strong>Hire</strong></h1>

            <button className="btn reserve-btn mt-4">
              <Link to="/cars">How are you?</Link>
            </button>
          </div>
        </SliderContent>
      </div>

      <div className="slider-item slider-item-03">
        <SliderContent>
          <div className="slider-content">
            <h4 className="text-light mb-3"></h4>
            <h1 className="text-light mb-4">Explore Aura<strong>Hire</strong></h1>

            <button className="btn reserve-btn mt-4">
              <Link to="/cars">@Swapnil</Link>
            </button>
          </div>
        </SliderContent>
      </div>
    </Slider>
  );
};

const SliderContent = ({ children }) => (
  <div className="slider-content-container">{children}</div>
);

export default Sliderhr;
