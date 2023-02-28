import React, { Fragment } from "react";

import sushiImage from "../../assets/sushi.jpg";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={sushiImage} alt="sushi table" />
      </div>
    </Fragment>
  );
};

export default Header;
