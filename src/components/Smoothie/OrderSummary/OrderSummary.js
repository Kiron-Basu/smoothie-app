import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('will update in ordersummary triggered');
  }

  render() {
    const {
      ingredients,
      price,
      purchaseCancelled,
      purchaseContinued,
    } = this.props;

    const ingredientSummary = Object.keys(ingredients).map(ingrtKey => {
      <li key={ingrtKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingrtKey}</span>:{' '}
        {ingredients[ingrtKey]}
      </li>;
    });
    return (
      <>
        <h3>Your Order</h3>
        <p>Your smoothie has the follwing ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: £ {price.toFixed(2)}</strong>
        </p>
        <p>Do you want to contine to the checkout?</p>
        <Button btnType="Danger" clicked={purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={purchaseContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
