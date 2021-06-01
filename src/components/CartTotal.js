import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { loginWithRedirect, myUser } = useUserContext();
  console.log();
  return (
    <Wrapper className='section section-center'>
      <div className='subtotal'>
        <span>subtotal:</span>
        <span>{formatPrice(total_amount)}</span>
      </div>
      <div className='shipping-fee'>
        <span>shipping fee:</span>
        <span>{formatPrice(shipping_fee)}</span>
      </div>
      <div className='total'>
        <span>order total:</span>
        <span>{formatPrice(total_amount + shipping_fee)}</span>
      </div>
      {myUser ? (
        <Link to='/checkout' className='checkout btn'>
          checkout
        </Link>
      ) : (
        <button className='login btn' onClick={loginWithRedirect}>
          login
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CartTotal;
