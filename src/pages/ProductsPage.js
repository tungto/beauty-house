import React, { useState } from 'react';
import { PageHero, Filters, Sort, GridView, ListView } from '../components';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';

const ProductsPage = () => {
  const {
    products_loading: loading,
    products_error: error,
    filtered_products: products,
  } = useProductsContext();

  const [isGridView, setIsGridView] = useState(true);

  return (
    <Wrapper className='section-center'>
      <PageHero title='products' />
      <section className='products-container'>
        <Filters className='right-products' />
        <div className='left-products'>
          <Sort isGridView={isGridView} />
          {isGridView ? (
            <GridView products={products} />
          ) : (
            <ListView products={products} />
          )}
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
