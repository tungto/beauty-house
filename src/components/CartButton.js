import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { useCartContext } from '../context/cart_context';

const CartButtons = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart className='cart-icon' />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          className='auth-btn btn'
          type='button'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          className='auth-btn btn'
          type='button'
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .cart-container {
    position: relative;
  }
  .cart-icon {
    font-size: 1.5rem;
  }
  .cart-btn {
    display: flex;
    align-items: center;
  }
  .cart-value {
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 1rem;
    width: 20px;
    height: 20px;
    background: #005a77;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    color: var(--clr-white);
  }
`;

export default CartButtons;
