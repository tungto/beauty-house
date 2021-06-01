import React from 'react';
import { CartContainer, CartTotal } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className='container'>
        <h1>Your cart is empty</h1>
        <Link className='btn' to='/api/products'>
          fill it
        </Link>
      </div>
    );
  }
  return (
    <div className='cart'>
      <CartContainer />
      <CartTotal />
    </div>
  );
};

export default Cart;
