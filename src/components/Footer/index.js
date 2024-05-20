import React from "react";
import logo from "../../assets/img/logo.png";
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import linkedin from '../../assets/img/linkedin.png'
import youtube from '../../assets/img/youtube.png'
import instagram from '../../assets/img/instagram.png'
import pinterest from '../../assets/img/pinterest.png'
import Button from "../../ui/Button";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <img src={logo} alt="img" />
          <div className="footer--line"></div>
          <div className="footer--info">
            <p>
              ABOUT <br /> SERVICES <br /> TECHNOLOGIES <br /> HOW TO <br />{" "}
              JOIN HYDRA
            </p>
          </div>
          <div className="footer--line"></div>
          <div className="footer--info">
            <p>
              F.A.Q <br />
              SITEMAP <br />
              CONDITIONS <br />
              LICENSES
            </p>
          </div>
          <div className="footer--line"></div>
         <div className="footer--end">
         <p>SOCIALIZE WITH HYDRA</p>
         <div className="footer--end__icons">
            <img src={facebook} alt="img" />
            <img src={twitter} alt="img" />
            <img src={linkedin} alt="img" />
            <img src={youtube} alt="img" />
            <img src={instagram} alt="img" />
            <img src={pinterest} alt="img" />
         </div>
         <Button text='BUILD YOUR WORLD'/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
