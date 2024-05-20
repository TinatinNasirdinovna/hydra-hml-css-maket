import React from 'react';
import logo from '../../assets/img/logo.png'
import logo_text from '../../assets/img/logo-text.png' 
import Button from '../../ui/Button';

const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <img src={logo} alt="img" />
                        <img src={logo_text} alt="img" />
                    </div>
                    <div className="header--nav">
                        <ul>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">SERVICES</a></li>
                            <li><a href="#">TECHNOLOGIES</a></li>
                            <li><a href="#">HOW</a></li>
                        </ul>
                    </div>
                    <div className="header--btns">
                        <button>CONTACT US</button>
                        <Button text='JOIN HYDRA'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;