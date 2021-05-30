import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <Wrapper>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
      <button className='auth-btn' type='button'>
        Login <FaUser />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .cart-btn {
    display: flex;
    align-items: center;
  }
`;

export default Cart;
