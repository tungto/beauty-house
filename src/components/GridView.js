import React from 'react';
import styled from 'styled-components';
import { Product } from '../components';

const GridView = ({ products }) => {
  let imgIndex = 0;
  return (
    <Wrapper className=''>
      {products.map((product) => {
        imgIndex++;
        if (imgIndex === 6) {
          imgIndex = 0;
        }
        return <Product key={product.id} {...product} imgIndex={imgIndex} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export default GridView;
