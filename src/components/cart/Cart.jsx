import React from "react";
import CartResume from "./CartResume";

const Cart = ({ cart, onDecrement, onIncrement, cartResume }) => {
  return (
    <div className="movies__cart">
      <ul>
        {cart.map((x) => (
          <li key={x.id} className="movies__cart-card">
            <ul>
              <li>ID: {x.id}</li>
              <li>Name: {x.name}</li>
              <li>Price: ${x.price}</li>
            </ul>
            <div className="movies__cart-card-quantity">
              <button onClick={() => onDecrement(x)}>-</button>
              <span>{x.quantity}</span>
              <button onClick={() => onIncrement(x)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <CartResume cartResume={cartResume} />
    </div>
  );
};

export default Cart;
