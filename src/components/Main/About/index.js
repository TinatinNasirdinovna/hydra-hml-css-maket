import React from "react";
import main from "../../../assets/img/about.png";
import Button from "../../../ui/Button";
const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <img src={main} alt="img" />
          <div className="about--text">
            <h1>ABOUT</h1>
            <h2>HYDRA VR</h2>
            <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <Button text='LET’S GET IN TOUCH'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
