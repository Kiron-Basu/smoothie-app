import React from 'react';
import classes from './MenuToggle.css';

const menuToggle = (props) => (
    <div className={classes.MenuToggle} onClick={props.toggleClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menuToggle;