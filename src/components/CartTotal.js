import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';

const CartTotal = () => {
  const { total_amount, shipping_fee } = useCartContext();
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
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CartTotal;
