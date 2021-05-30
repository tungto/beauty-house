import React from 'react';
import { formatNumber } from '../utils/helpers';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ images, name, price, id }) => {
  // console.log(images[0].url);
  return (
    <Wrapper>
      <div className='container'>
        <img src={images[0].url} alt='name' className='product-img' />
        <Link to={`/api/products/${id}`} className='link'>
          <FaSearch />
        </Link>
        <div className='product-info'>
          <p className='featured-title'>{name}</p>
          <p>{formatNumber(price)}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    position: relative;
    border-radius: var(--radius);
  }
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
  .product-img {
    border-radius: var(--radius);
    position: relative;
    transition: var(--transition);
    width: 100%;
    max-height: 200px;
  }
  .product-info {
    display: flex;
    justify-content: space-between;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.5rem;
    height: 2.5rem;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
`;

export default Product;
