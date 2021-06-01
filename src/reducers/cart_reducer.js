import { act } from '@testing-library/react';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';
import { products_url } from '../utils/constants';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    console.log(action.payload);
    const { cart } = state;
    let tempItem = cart.find((item) => item.id === id + color);
    // if item already in cart
    if (tempItem) {
      const tempCart = cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    }
    // if item not in cart
    else {
      console.log(amount, color);

      const newItem = {
        id: id + color,
        amount: amount,
        name: product.name,
        color: color,
        max: product.stock,
        price: product.price,
        image: product.images[0].url,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    console.log(action.payload);
    let tempCart = [...state.cart];
    tempCart = tempCart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.value === 'inc') {
          let newAmount = item.amount + 1;
          console.log('new amount', newAmount, item.max);
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else if (action.payload.value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    console.log(tempCart);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    console.log(state.cart);
    const { total_items, total_amount } = state.cart.reduce(
      (totalObject, cartItem) => {
        console.log(cartItem);
        const { amount, price } = cartItem;
        totalObject.total_items += amount;
        totalObject.total_amount += amount * price;
        console.log(totalObject);
        return totalObject;
      },
      { total_items: 0, total_amount: 0 }
    );
    console.log(total_amount, total_items);
    return { ...state, total_amount, total_items };
  }
  throw new Error(`No Matching ${action.type} - action type`);
};

export default cart_reducer;
