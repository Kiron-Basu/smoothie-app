import React from 'react';
import PropTypes from 'prop-types';
import Blender from '../../Smoothie/Blender/Blender';
import Button from '../../UI/Button/Button';
import SmoothieIngredient from '../../Smoothie/SmoothieIngredient/SmoothieIngredient';
import classes from './CheckoutSummary.css';

const checkoutSummary = ({
  ingredients,
  checkoutContinued,
  checkoutCancelled,
}) => {
  let transformedIngredients2 = Object.keys(ingredients)
    .map(ingrtKey =>
      [...Array(ingredients[ingrtKey])].map((_, index) => (
        <SmoothieIngredient key={ingrtKey + index} type={ingrtKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients2.length === 0) {
    transformedIngredients2 = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.checkoutSummary}>
      <h1>Enjoy your meal!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Blender
          ingredients={transformedIngredients2}
          style={{ position: 'relative' }}
        />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;

checkoutSummary.propTypes = {
  ingredients: PropTypes.string,
  checkoutCancelled: PropTypes.string,
  checkoutContinued: PropTypes.string,
};
