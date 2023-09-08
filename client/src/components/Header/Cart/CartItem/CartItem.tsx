import React from "react";
import cls from "./CartItem.module.scss";
const CartItem = (props: any) => {
  return (
    <div className={cls.cartitem}>
      <div></div>
      {props.price}$
    </div>
  );
};

export default CartItem;
