import React, { FC, useState } from "react";
import cls from "./Cart.module.scss";
import { useAppSelector } from "../../../redux/hooks/redux-hook";
import CartItem from "./CartItem/CartItem";
const Cart: FC = () => {
  const cart = useAppSelector((cart) => cart.cart.cart);
  const [showCartItems, setShowCartItems] = useState(false);
  const cartEl = cart.map((el) => <CartItem key={el._id} price={el.price} />);
  return (
    <div className={cls.container}>
      <div
        className={cls.cart}
        onClick={() => setShowCartItems((prev) => !prev)}
      >
        <div className={cls.total}>
          <p>{cart.length}</p>
        </div>
        <h1>Watch</h1>
      </div>
      {showCartItems && <div className={cls.cartitem}>{cartEl}</div>}
    </div>
  );
};

export default Cart;
