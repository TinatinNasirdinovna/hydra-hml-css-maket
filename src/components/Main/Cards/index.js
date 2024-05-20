import React from "react";
import card1 from "../../../assets/img/card1.png";
import card2 from "../../../assets/img/card2.png";
import card3 from "../../../assets/img/card3.png";
import card4 from "../../../assets/img/card4.png";
import Button from "../../../ui/Button";

const Cards = () => {
  return (
    <div id="cards">
      <div className="container">
        <div className="cards">
          <div className="cards--card">
            <div className="cards--card__img">
              <img src={card1} alt="img" />
            </div>
            <h1>SIMULATION</h1>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button text='TRY IT NOW'/>
          </div>
          <div className="cards--card">
            <div className="cards--card__img">
              <img src={card2} alt="img" />
            </div>
            <h1>EDUCATION</h1>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button text='TRY IT NOW'/>
          </div>
          <div className="cards--card">
            <div className="cards--card__img">
              <img src={card3} alt="img" />
            </div>
            <h1>SELF-CARE</h1>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button text='TRY IT NOW'/>
          </div>
          <div className="cards--card">
            <div className="cards--card__img">
              <img src={card4} alt="img" />
            </div>
            <h1>OUTDOOR</h1>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <Button text='TRY IT NOW'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
