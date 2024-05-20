import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";


const ConnectInfo = () => {
  return (
    <div id="connect">
      <div className="container">
        <div className="connect">
          <div className="connect--card">
            <span>
              <GrLocation />
            </span>
            <div className="connect--card__text">
                <h3>Pay Us a Visit</h3>
                <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <div className="connect--card  connect--cardCenter">
            <span>
              <LuPhoneCall />
            </span>
            <div className="connect--card__text">
                <h3>Give Us a Call</h3>
                <p>(110) 1111-1010</p>
            </div>
          </div>
          <div className="connect--card">
            <span>
              <MdOutlineMail />
            </span>
            <div className="connect--card__text">
                <h3>Send Us a Message</h3>
                <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectInfo;
