import React, {Component} from 'react';
import Smoothie from './../../components/Smoothie/Smoothie';
import BuildControls from '../../components/Smoothie/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Smoothie/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  oats: 0.2,
  banana: 0.2,
  strawberries: 0.4,
  raspberries: 0.3
};

export default class SmoothieBuilder extends Component {

  state = {
    ingredients: {
      oats: 0,
      banana: 0,
      strawberries: 0,
      raspberries: 0
    },
    totalPrice: 0,
    purchaseable: false,
    purchasing: false
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }
  cancelPurchaseHandler = () => {
    this.setState({purchasing: false});
  }
  continuePurchaseHandler = () => {
    alert('You have opted to continue');
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(itemKey => {
      return ingredients[itemKey]
    })
      .reduce((prev, curr) => {
        return prev + curr;
  },0);
  this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const ingredientsCopy = {
      ...this.state.ingredients
    }
    ingredientsCopy[type] ++;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState({ingredients: ingredientsCopy, totalPrice: updatedPrice});
    this.updatePurchaseState(ingredientsCopy);
}
  removeIngredientHandler = (type) => {
    const ingredientsCopy = {
      ...this.state.ingredients
    }
    ingredientsCopy[type] --;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
    console.log(updatedPrice)
    this.setState({ingredients: ingredientsCopy, totalPrice: updatedPrice});
    this.updatePurchaseState(ingredientsCopy);
}

    render() {
      const disabledInfo = {
        ...this.state.ingredients
      }
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
      console.log('--->' + this.state.purchasing)
      return (
        // short hand for fragment
        <> 
            <Modal show={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
              <OrderSummary 
              ingredients={this.state.ingredients}
              purchaseCancelled={this.cancelPurchaseHandler}
              purchaseContinued={this.continuePurchaseHandler}
              price={this.state.totalPrice}
              />
            </Modal>
            <Smoothie
            ingredients={this.state.ingredients}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            />
            <BuildControls
            add={this.addIngredientHandler}
            remove={this.removeIngredientHandler}
            disabledInfo={disabledInfo}
            price={this.state.totalPrice}
            />
        </>
          );
        }
      }