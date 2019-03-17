import React from 'react';
import classes from './Smoothie.css';
import SmoothieIngredient from './SmoothieIngredient/SmoothieIngredient';
import Blender from './Blender/Blender';

const Smoothie = props => {
  // gets amount of each ingredient
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingrtKey =>
      [...Array(props.ingredients[ingrtKey])].map((_, index) => (
        <SmoothieIngredient key={ingrtKey + index} type={ingrtKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Smoothie}>
      <Blender
        className={classes.Zindex}
        ingredients={transformedIngredients}
      />
    </div>
  );
};

export default Smoothie;

// get an array equal to value of each key e.g
// if salad: 3, then Array(3) = 3 empty slots, as Array(arg) creates 3 empty array items
// the spread operator (inside braces) then spreads these empty array items into an actual array hence creating an array
// which has the same dimensions as the digit property value. The next map returns an underscore inplace of each undefined item
// e.g. salad:3 = Array(3) = 3 x [empty slots] --> spread --> [undefined, undefined, undefined] --> map [_,_,_]
// for each of these _'s, a BurgerIngredient is created with the type of ingrtKey
// the pupose of the 1st map is to iterate over each key/value pair and return a array with the same number of (blank/undefined)
// items as the numerical value fo each key/value pair
// The purpose of the second map is to iterate over each item in the newly generated array and return a component per array item
// the underscore is a dummy value which fulfills the map parameter requirements and allows consequent iteration
