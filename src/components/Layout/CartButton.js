import { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
