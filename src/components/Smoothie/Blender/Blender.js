import React from 'react';
import classes from './Blender.css';

const Blender = ({ ingredients }) => (
  <>
    <div className={classes.topper} />
    <div className={classes.topperFoundation} />
    <div className={classes.Overlay}>
      <div className={classes.textBoxWrapper}>
        <div>{ingredients}</div>
      </div>
    </div>
    <div className={classes.baseTrapezium} />
    <div className={classes.baseRectangle} />
  </>
);

export default Blender;
