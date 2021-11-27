import { useEffect, useState } from "react";
import { initialCart, movies, discountRules } from "../constants";
import { getCartItem, getDiscountRate } from "../utils/cartUtils";

export const useCart = () => {
  const [cart, setCart] = useState(initialCart);

  const [cartResume, setCartResume] = useState({
    subtotal: 0,
    discountRate: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    const newSubTotal = cart.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0
    );
    const calculatedDiscountRate = getDiscountRate(cart, discountRules);
    const calculatedDiscount = newSubTotal * calculatedDiscountRate;
    setCartResume({
      subtotal: newSubTotal,
      discountRate: calculatedDiscountRate,
      discount: calculatedDiscount,
      total: newSubTotal - calculatedDiscount,
    });
  }, [cart]);

  const addToCart = (movie) => {
    const newCart = [...cart];
    const cartItem = getCartItem(newCart, movie);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      const newCartItem = { ...movie, quantity: 1 };
      newCart.push(newCartItem);
    }
    setCart(newCart);
  };

  const decrementQuantity = (movie) => {
    const newCart = [...cart];
    const cartItem = getCartItem(newCart, movie);
    if (cartItem) {
      cartItem.quantity--;
      setCart(newCart.filter(({ quantity }) => quantity > 0));
    }
  };

  const incrementQuantity = (movie) => addToCart(movie);

  return {
    movies,
    cart,
    cartResume,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  };
};
