import React from 'react';
import classes from './MenuToggle.css';

const menuToggle = ({ toggleClick }) => (
  <div
    className={classes.MenuToggle}
    onClick={toggleClick}
    onKeyDown={toggleClick}
    role="presentation"
  >
    <div />
    <div />
    <div />
  </div>
);

export default menuToggle;
