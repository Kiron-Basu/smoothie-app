import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingrtKey => {
        return <li key={ingrtKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingrtKey}</span>: {props.ingredients[ingrtKey]}
                </li>
    });
return (
    <>
        <h3>Your Order</h3>
        <p>Your smoothie has the follwing ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Do you want to contine to the checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </>
    )
}

export default orderSummary