import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './SmoothieIngredient.css';

class SmoothieIngredient extends Component {
  // conditionally apply CSS
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'oats':
        ingredient = <div className={classes.Oats} />;
        break;
      case 'banana':
        ingredient = <div className={classes.Banana} />;
        break;
      case 'strawberries':
        ingredient = <div className={classes.Strawberries} />;
        break;
      case 'raspberries':
        ingredient = <div className={classes.Raspberries} />;
        break;
      case 'kiwi':
        ingredient = <div className={classes.Kiwi} />;
        break;
      case 'blueberries':
        ingredient = <div className={classes.Blueberries} />;
        break;
      case 'kale':
        ingredient = <div className={classes.Kale} />;
        break;
      case 'pineapple':
        ingredient = <div className={classes.Pineapple} />;
        break;
      case 'mango':
        ingredient = <div className={classes.Mango} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

SmoothieIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SmoothieIngredient;
