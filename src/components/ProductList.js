import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <Wrapper className=' '>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export default ProductList;
