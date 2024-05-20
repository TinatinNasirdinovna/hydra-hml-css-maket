import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Steps = () => {
  return (
    <div id="steps">
      <div className="container">
        <div className="steps">
          <div className="steps--box">
            <div className="steps--box__numbers">
              <div className="steps--box__numbers--number">
                <span>01</span>
              </div>
            </div>
            <div className="steps--box__text">
              <span>
                <FaArrowRight />
              </span>
              <h4>
                3D Conception <br /> & Design
              </h4>
            </div>
          </div>
          <div className="steps--box">
            <div className="steps--box__numbers">
              <div className="steps--box__numbers--number">
                <span>02</span>
              </div>
            </div>
            <div className="steps--box__text">
              <span>
                <FaArrowRight />
              </span>
              <h4>
                3Interaction <br />
                Design
              </h4>
            </div>
          </div>
          <div className="steps--box">
            <div className="steps--box__numbers">
              <div className="steps--box__numbers--number">
                <span>03</span>
              </div>
            </div>
            <div className="steps--box__text">
              <span>
                <FaArrowRight />
              </span>
              <h4>
                VR World <br />
                User Testing
              </h4>
            </div>
          </div>
          <div className="steps--box">
            <div className="steps--box__numbers">
              <div className="steps--box__numbers--number">
                <span>04</span>
              </div>
            </div>
            <div className="steps--box__text">
              <span>
                <FaArrowRight />
              </span>
              <h4>
                Hydra VR <br />
                Deploy
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
