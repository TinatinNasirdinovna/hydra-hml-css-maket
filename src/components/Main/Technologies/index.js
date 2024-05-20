import React from "react";
import { SlArrowDown } from "react-icons/sl";

const Technologies = () => {
  return (
    <div id="tech">
      <div className="container">
        <div className="tech">
          <h1>TECHNOLOGIES & HARDWARE</h1>
          <h2>USED BY HYDRA VR.</h2>
          <div className="tech--btn">
            <div className="tech--btn__arrow">
              <SlArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
