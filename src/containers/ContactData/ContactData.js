import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css'; 
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    // preventDefault prevents default reload behaviour from form element
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
          this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, //best practice is to recalculate price on server to prevent manipulation but use this for now
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
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error);
      this.setState({loading: false});
    }); //.json is the appropriate end point for firebase
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;