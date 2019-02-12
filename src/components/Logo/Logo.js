import React from 'react';
import smoothieLogo from '../../assets/images/smoothie-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={smoothieLogo} alt="Smoothie Logo"/>
    </div>
);

export default logo;