import React from 'react';
import classes from './Button.css';

const button = ({ clicked, btnType, children }) => (
  <button
    type="button"
    onClick={clicked}
    className={[classes.Button, classes[btnType]].join(' ')}
  >
    {children}
  </button>
);

export default button;
