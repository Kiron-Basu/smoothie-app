import React from 'react';
import classes from './Smoothie.css';
import SmoothieIngredient from './SmoothieIngredient/SmoothieIngredient';
import Blender from './Blender/Blender';

const Smoothie = (props) => {
    return (
        <div className={classes.Smoothie}>
            <Blender>
            <SmoothieIngredient type="oats"/>
            <SmoothieIngredient type="banana"/>
            <SmoothieIngredient type="strawberries"/>
            <SmoothieIngredient type="raspberries"/>
            </Blender>
        </div>
    );
}

export default Smoothie;