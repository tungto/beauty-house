import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';

const GridView = ({ products }) => {
  return (
    <Wrapper className=' '>
      <ProductList products={products} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default GridView;
