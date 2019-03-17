import React from 'react';
import PropTypes from 'prop-types';
import classes from './Order.css';

const order = ({ propsIngredients, price }) => {
  const ingredients = [];

  for (const ingredientName in propsIngredients) {
    ingredients.push({
      name: ingredientName,
      amount: propsIngredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map(ig => (
    <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '2px 8px',
        border: '1px solid grey',
        padding: '5px',
      }}
      key={ig.name}
    >
      {ig.name} ({ig.amount}){' '}
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        {' '}
        Price: <strong>£{price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;

order.propTypes = {
  price: PropTypes.number,
  propsIngredients: PropTypes.string,
};
