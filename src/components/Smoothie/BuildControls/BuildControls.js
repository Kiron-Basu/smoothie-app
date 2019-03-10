import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Oats", type:"oats" },
    {label: "Banana", type:"banana" },
    {label: "Strawberries", type:"strawberries" },
    {label: "Raspberries", type:"raspberries" },
    {label: "Kiwi", type:"kiwi" },
    {label: "Blueberries", type:"blueberries" },
    {label: "Kale", type:"kale" },
    {label: "Pineapple", type:"pineapple" },
    {label: "Mango", type:"mango" }
];

const buildControls = (props) => (
        <div className={classes.BuildControls}>
        <p className={classes.Price}>Current Price: <strong>£{props.price.toFixed(2)}</strong></p>
        <div className={classes.Wrap}>
        {controls.map(ctrl => (
        <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        add={() => props.add(ctrl.type)}
        remove={() => props.remove(ctrl.type)}
        disabledInfo={props.disabledInfo[ctrl.type]}
        />
        ))}
        </div>
        <button className={classes.OrderButton}
            onClick={props.ordered} 
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
    )
      export default buildControls