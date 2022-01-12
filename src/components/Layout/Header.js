import React, { useContext } from 'react';

import mealsImage from '../../assets/meals.jpg';
import CartContext from '../../store/cart-context';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onClick={props.onShowCart}
          cartAmount={numberOfCartItems}
        />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!'></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
