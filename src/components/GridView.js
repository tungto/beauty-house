import React from 'react';
import styled from 'styled-components';
import { Product } from '../components';

const GridView = ({ products }) => {
  return (
    <Wrapper className=''>
      {products.map((product, index) => (
        <Product key={product.id} {...product} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export default GridView;
