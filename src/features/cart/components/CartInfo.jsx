import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../cartState";

function CartInfo() {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div>
      <h1>Cart Info</h1>
      <ul className="cart-info">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title} : {item.quantity}
          </li>
        ))}
      </ul>

      <p>Total : {total}</p>
    </div>
  );
}

export default CartInfo;
