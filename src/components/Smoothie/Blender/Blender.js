import React from 'react';
import classes from './Blender.css';

const Blender = (props) => {
    return (
        <>
        <div className={classes.topper}></div>
        <div className={classes.topperFoundation}></div>
            <div className = {classes.textBoxWrapper}>
              <div>
              {props.ingredients}     
              </div>   
            </div>
        <div className={classes.baseTrapezium}></div>
        <div className={classes.baseRectangle}>
        <button
            onClick={props.ordered} 
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW
            </button>
        </div>
        </>
    );
}

export default Blender;