import React from 'react';
import classes from './Blender.css';

// const TwoClasses = [classes.textBoxWrapper, classes.Overlay];


const Blender = (props) => {
    return (
        <>
        {/* <div className={classes.Container}> */}
        <div className={classes.topper}></div>
        <div className={classes.topperFoundation}></div>
            <div className={classes.Overlay}>
                <div className={classes.textBoxWrapper}>
                <div>
                {props.ingredients}     
                </div>   
                </div>
            </div>
        <div className={classes.baseTrapezium}></div>
        <div className={classes.baseRectangle}></div>
        {/* </div> */}
        </>
    );
}

export default Blender;