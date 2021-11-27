import React from "react";

const CartResume = ({ cartResume }) => {
  const { subtotal, discountRate, discount, total } = cartResume;

  return (
    <div className="movies__cart-resume">
      <p>Subtotal: ${subtotal}</p>
      {discount > 0 && (
        <p>
          Discount (${discountRate * 100} %): ${discount}
        </p>
      )}

      <p className="movies__cart-total">Total: ${total}</p>
    </div>
  );
};

export default CartResume;
