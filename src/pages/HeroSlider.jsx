import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "../styles/hero-slider.css";

const HeroSlider = () => {
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
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <SliderContainer>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Hi</h4>
            <h1 className="text-light mb-4">Welcome to Aura<strong>Hire</strong></h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Add Comment</Link>
            </button>
          </div>
        </SliderContainer>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <SliderContainer>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Thanks for waiting</h4>
            <h1 className="text-light mb-4">Connect with <strong>Us</strong></h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">How are you?</Link>
            </button>
          </div>
        </SliderContainer>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <SliderContainer>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Want Jobs?</h4>
            <h1 className="text-light mb-4">Connect with <strong>Hire</strong></h1>
            <h1 className="text-light mb-4">Explore Aura</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">@Swapnil</Link>
            </button>
          </div>
        </SliderContainer>
      </div>
    </Slider>
  );
};

const SliderContainer = ({ children }) => (
  <div className="slider__container">{children}</div>
);

export default HeroSlider;
