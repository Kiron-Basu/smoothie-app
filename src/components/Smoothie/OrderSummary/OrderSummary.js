import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
    
class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('will update in ordersummary triggered');
    }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(ingrtKey => {
        return <li key={ingrtKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingrtKey}</span>: {this.props.ingredients[ingrtKey]}
                </li>
        });
        return (
            <>
        <h3>Your Order</h3>
        <p>Your smoothie has the follwing ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: £ {this.props.price.toFixed(2)}</strong></p>
        <p>Do you want to contine to the checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </>
        )
    }
}

export default OrderSummary