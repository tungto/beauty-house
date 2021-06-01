import React from 'react';
import { Product } from '../components';
import { useProductsContext } from '../context/products_context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';

const FeaturedProducts = () => {
  const {
    featured_products: products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();
  console.log(products);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <section className='section featured-product'>
        <div className='header'>
          <h2 className='featured-title'>Featured Products</h2>
          <div className='underline'></div>
        </div>
        <div className='featured section-center'>
          {products.map((product, index) => (
            <Product key={product.id} {...product} index={index} />
          ))}
        </div>
        <Link className='btn btn-all' to='/api/products'>
          all products
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f1f5f8;
  .featured {
    margin: 2rem auto;
    display: grid;
    gap: 2.5rem;
  }
  .header {
    text-align: center;
  }
  .underline {
    width: 150px;
    height: 5px;
    background-color: grey;
    display: inline-block;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
