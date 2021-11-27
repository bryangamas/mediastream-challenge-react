export const getCartItem = (cart, movie) => {
  return cart.find(({ id }) => id === movie.id);
};

// Assuming that the total discount is the highest of the discounts to apply
export const getDiscountRate = (cart, rules) => {
  let totalDiscount = 0;
  for (let { m, discount } of rules) {
    const shouldApply = m.every((id) =>
      cart.some((cartItem) => cartItem.id === id)
    );
    if (shouldApply) {
      totalDiscount = Math.max(totalDiscount, discount);
    }
  }
  return totalDiscount;
};
