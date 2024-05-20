import React from 'react';
import logo1 from '../../../assets/img/logos1.png'
import logo2 from '../../../assets/img/logos2.png'
import logo3 from '../../../assets/img/logos3.png'
import logo4 from '../../../assets/img/logos4.png'
const Logos = () => {
    return (
        <div id='logos'>
            <div className="container">
                <div className="logos">
                    <img src={logo1} alt="img" />
                    <img src={logo2} alt="img" />
                    <img src={logo3} alt="img" />
                    <img src={logo4} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Logos;