import React, {Component} from 'react';
import classes from './SmoothieIngredient.css';
import PropTypes from 'prop-types';

class SmoothieIngredient extends Component { //conditionally apply CSS
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('oats'):
                ingredient = <div className={classes.Oats}></div>;
                break;
            case ('banana'):
                ingredient = 
                <div className={classes.Banana}></div>;
                break;
            case ('strawberries'):
                ingredient = <div className={classes.Strawberries}></div>;
                break;
            case ('raspberries'):
                ingredient = <div className={classes.Raspberries}></div>;
                break;
            case ('kiwi'):
                ingredient = <div className={classes.Kiwi}></div>;
                break;
            case ('blueberries'):
                ingredient = <div className={classes.Blueberries}></div>;
                break;
            case ('kale'):
                ingredient = <div className={classes.Kale}></div>;
                break;
            case ('pineapple'):
                ingredient = <div className={classes.Pineapple}></div>;
                break;
            case ('mango'):
                ingredient = <div className={classes.Mango}></div>;
                break;
            default:
                ingredient = null;
        } 
        return ingredient;  
    }
    
}

SmoothieIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default SmoothieIngredient;