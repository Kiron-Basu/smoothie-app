import React from 'react';
import Blender from '../../Smoothie/Blender/Blender';
import Button from '../../UI/Button/Button';
import SmoothieIngredient from '../../Smoothie/SmoothieIngredient/SmoothieIngredient';
import classes from './CheckoutSummary.css';



const checkoutSummary = (props) => {
    let transformedIngredients2 = Object.keys(props.ingredients)
    .map(ingrtKey => {
        return [...Array(props.ingredients[ingrtKey])]
        .map((_,index) => {
        return <SmoothieIngredient key={ingrtKey + index} type={ingrtKey}/>   
     });
    }).reduce((arr, el) => {return arr.concat(el)}, [])
    if (transformedIngredients2.length ===0) {
        transformedIngredients2 = <p>Please start adding ingredients!</p>
    }
   return (
    <div className={classes.checkoutSummary}>
        <h1>Enjoy your meal!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
            <Blender ingredients={transformedIngredients2} style={{position: 'relative'}}/>
        </div>
        <Button btnType="Danger" 
        clicked={props.checkoutCancelled}>CANCEL</Button>
        <Button btnType="Success" 
        clicked={props.checkoutContinued}>CONINUE</Button>
    </div>
          );
      }

      export default checkoutSummary;