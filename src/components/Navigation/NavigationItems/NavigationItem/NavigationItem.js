import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NavigationItem.css';

const navigationItem = ({ link, children }) => (
  <li className={classes.NavigationItem}>
    <NavLink tag={Link} to={link} activeClassName={classes.active} exact>
      {children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any,
};

export default navigationItem;
