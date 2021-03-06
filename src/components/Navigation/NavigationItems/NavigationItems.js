import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ exact }) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact={exact}>
      Smoothie Maker
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
