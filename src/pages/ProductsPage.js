import React from 'react';
import { PageHero, Filters, Sort, GridView, ListView } from '../components';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

const ProductsPage = () => {
  const { filtered_products: products, isGridView } = useFilterContext();
  //   console.log(isGridView);
  if (products.length < 1) {
    return <h1>There no products found</h1>;
  }

  return (
    <Wrapper className='section-center'>
      <PageHero title='products' />
      <section className='products-container'>
        <Filters className='right-products' />
        <div className='left-products'>
          <Sort />
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
