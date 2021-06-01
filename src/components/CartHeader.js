import React from 'react';
import styled from 'styled-components';

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
  padding-bottom: 1rem;
  h4 {
    font-weight: 100;
  }
`;

export default CartHeader;
