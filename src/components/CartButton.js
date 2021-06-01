import React from 'react';
import {
  FaShoppingCart,
  FaUser,
  FaUserMinus,
  FaUserPlus,
} from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  console.log(myUser);
  return (
    <Wrapper>
      Buttons
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
      {myUser ? (
        <button
          className='auth-btn'
          type='button'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button className='auth-btn' type='button' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
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

export default CartButtons;
