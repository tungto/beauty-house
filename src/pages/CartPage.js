import React from 'react';
import { CartContainer, CartTotal } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='empty-cart section'>
          <h1>Your cart is empty</h1>
          <Link className='btn btn-fill' to='/api/products'>
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <div className='cart section-center'>
      <CartContainer />
      <CartTotal />
    </div>
  );
};

const Wrapper = styled.div`
  text-align: center;
  min-height: calc(80vh + 3rem);
  .btn-fill {
    width: 10rem;
    padding: 1rem;
    background: lightblue;
    margin: 5rem;
  }
`;

export default Cart;
