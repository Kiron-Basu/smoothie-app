import React, {Component} from 'react';
import Smoothie from './../../components/Smoothie/Smoothie';
import BuildControls from '../../components/Smoothie/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Smoothie/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
  oats: 0.2,
  banana: 0.2,
  strawberries: 0.4,
  raspberries: 0.3,
  kiwi: 0.2,
  blueberries: 0.4,
  kale: 0.3,
  pineapple: 0.25,
  mango: 0.35
};

class SmoothieBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 0,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    console.log(this.props)
    axios.get('https://react-my-burger-e7faf.firebaseio.com/ingredients.json')
    .then(response => {
      this.setState({ingredients: response.data})
    })
    .catch(error => {
      this.setState({error: true})
    });
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }
  cancelPurchaseHandler = () => {
    this.setState({purchasing: false});
  }
  continuePurchaseHandler = () => {
  
  const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&');
    this.props.history.push({
    pathname: '/checkout',
    search: '?' + queryString
  });
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
  
    const ingTotal = Object.keys(ingredientsCopy).reduce(function (acc, key) {
      return acc += ingredientsCopy[key];
    }, 0)
    
    if(ingTotal > 12) { 
    this.tooManyIngredientsHandler() 
    } else {
    ingredientsCopy[type] ++;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState({ingredients: ingredientsCopy, totalPrice: updatedPrice});
    this.updatePurchaseState(ingredientsCopy);
    }
  }
  removeIngredientHandler = (type) => {
    const ingredientsCopy = {
      ...this.state.ingredients
    }
    ingredientsCopy[type] --;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
    this.setState({ingredients: ingredientsCopy, totalPrice: updatedPrice});
    this.updatePurchaseState(ingredientsCopy);
}

  tooManyIngredientsHandler = () => {
    alert('You have reached the maximum number of ingredients allowed!');
}

    render() {
      let orderSummary = null;
      if (this.state.loading) {
        orderSummary = <Spinner/>
      }
      const disabledInfo = {
        ...this.state.ingredients
      }
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
      let smoothie = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
      if (this.state.ingredients) {
        smoothie = (
          <>
          <Smoothie
          ingredients={this.state.ingredients}
          />
          <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
          />
          </>
          );
          orderSummary = <OrderSummary 
          ingredients={this.state.ingredients}
          purchaseCancelled={this.cancelPurchaseHandler}
          purchaseContinued={this.continuePurchaseHandler}
          price={this.state.totalPrice}
          />;
      }
      if (this.state.loading) {
        orderSummary = <Spinner />
      }
      
      return (
        // short hand for fragment
        <> 
            <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
              {orderSummary}
            </Modal>
            {smoothie}
        </>
          );
        }
      }

      export default withErrorHandler(SmoothieBuilder, axios);