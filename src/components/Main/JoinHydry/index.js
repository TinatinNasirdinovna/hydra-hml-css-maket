import React from 'react';
import Button from '../../../ui/Button';

const JoinHydry = () => {
    return (
        <div id='join'>
            <div className="container">
                <div className="join">
                    <h1>JOIN HYDRA</h1>
                    <h2>Let’s Build Your VR Experience</h2>
                    <div className="join--input">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className="join--input">
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Phone Number' />
                    </div>
                    <input type="text" placeholder='Subject'/>
                    <textarea name="" id="" placeholder='Tell Us Something...'></textarea>
                    <Button text='SEND TO HYDRA'/>
                </div>
            </div>
        </div>
    );
};

export default JoinHydry;