import React from "react";
import hero_img from "../../../assets/img/hero-img.png";
import { HiArrowRight } from "react-icons/hi2";
import bg1 from "../../../assets/img/hero-img-vector-center.png";
import bg2 from "../../../assets/img/hreo-vector-right.png";
import bg3 from "../../../assets/img/hero-vector-down.png";
import Button from "../../../ui/Button";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--text">
            <h1>
              <span>Dive</span> Into The Depths Of <span>Virtual Reality</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="hero--text__btn">
              <Button text="BUILD YOUR WORLD" />
              <span>
                <HiArrowRight />
              </span>
            </div>
          </div>
          <div className="hero--img">
            <img className="hero--img__main" src={hero_img} alt="img" />
            <div className="hero--img__bg">
              <div className="hero--img__bg--com">
                <img src={bg1} alt="img" />
                <img src={bg2} alt="img" />
                <img src={bg3} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
