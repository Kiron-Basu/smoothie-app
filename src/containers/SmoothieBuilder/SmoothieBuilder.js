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
  raspberries: 0.3
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
    // alert('You have opted to continue');
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice, //best practice is to recalculate price on server to prevent manipulation but use this for now
      customer: {
        name: 'Tom Jones',
        address: {
          street: 'William Street',
          postCode: 'SN31JP',
          country: 'England'
      },
      email: 'test@test.com'
    },
    deliveryMethod: 'fastest'
  }
    axios.post('/orders.json', order)
    .then(response => {
      console.log(response);
      this.setState({loading: false, purchasing: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({loading: false, purchasing: false})
    }); //.json is the appropriate end point for firebase
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