import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaMinus, FaPlus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { CartHeader, CartItem } from '../components';
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center'>
      <CartHeader />
      {cart.map((item) => {
        console.log(item);
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='action-btn'>
        <Link to='/api/products' className='continue btn'>
          continue shopping
        </Link>
        <button className='clear-cart btn' type='button' onClick={clearCart}>
          clear cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .action-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export default CartContainer;
