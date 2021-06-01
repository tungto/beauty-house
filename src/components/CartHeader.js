import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaMinus, FaPlus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { AmountButtons } from '../components';
import { Link } from 'react-router-dom';

const CartHeader = () => {
  return (
    <Wrapper>
      <h4 className='item'>item</h4>
      <h4 className='price'>price</h4>
      <h4 className='quanity'>quanity</h4>
      <h4 className='subtotal'>subtotal</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 316px 1fr 1fr 1fr auto;
  justify-items: center;
  h4 {
    font-weight: 100;
  }
`;

export default CartHeader;
