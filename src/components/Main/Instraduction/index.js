import React from "react";
import arrow from '../../../assets/img/arrowToRight.png'


const Instraduction = ({obj}) => {
  return (
    <div id="instraduction">
      <div className="container">
        <div className="instraduction">
            <div className="instraduction--title">
                <h1>{obj.title}</h1>
                <div className="instraduction--title__arrow">
                    <h1>{obj.title2}</h1>
                    <img src={arrow} alt="img" />
                </div>
            </div>
            <p>{obj.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Instraduction;
