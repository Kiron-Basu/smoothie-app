import React from 'react';
import classes from './BuildControl.css';

const BuildControl = ({ label, remove, disabledInfo, add }) => (
  <div className={classes.ControlGroup}>
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        type="button"
        className={classes.Less}
        onClick={remove}
        disabled={disabledInfo}
      >
        Less
      </button>
      <button className={classes.More} onClick={add} type="button">
        More
      </button>
    </div>
  </div>
);
export default BuildControl;
