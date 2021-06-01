import React from 'react';
import { PageHero, Filters, Sort, ProductList } from '../components';
import styled from 'styled-components';

const ProductsPage = () => {
  return (
    <Wrapper className=' '>
      <PageHero title='products' />
      <section className='products-container section-center section'>
        <Filters className='right-products' />
        <div className='left-products'>
          <Sort />
          <ProductList />
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .products-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 2rem;
  }
`;

export default ProductsPage;
