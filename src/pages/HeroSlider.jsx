import React from "react";
import Slider from "react-slick"; //slidernshit
import { Container } from "reactstrap";
import { Link } from "react-router-dom";


import "../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Welcome to @Company_name</h4>
            <h1 className="text-light mb-4">We are under development</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Add coomment</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Thanks for waiting</h4>
            <h1 className="text-light mb-4">Explore @Company_Name</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">How are you?</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Hey Hello</h4>
            <h1 className="text-light mb-4">Thank you for your patience</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">@Swapnil</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
