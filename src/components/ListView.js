import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
const ListView = ({ products }) => {
  let imgIndex = 0;
  return (
    <Wrapper className=' '>
      {products.map((product, index) => {
        imgIndex++;
        if (imgIndex === 6) {
          imgIndex = 0;
        }
        const { name, id, price, images, description } = product;
        return (
          <article key={id} className='item'>
            <img
              src={images[imgIndex].url}
              alt={images[imgIndex].filename}
              className='img'
            />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <span>{description.substring(0, 150)}...</span>
              <Link to={`/api/products/${id}`} className='btn detail-btn'>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  article {
    display: grid;
    margin-bottom: 2rem;
    grid-template-columns: 1fr 3fr;
    gap: 1.5rem;
    .img {
      width: 100%;
      height: 94%;
    }
    .detail-btn {
      display: block;
      width: 5rem;
      margin-top: 0.5rem;
      background: #50929c;
      color: var(--clr-white);
      :hover {
        background: lightblue;
      }
    }
  }
`;

export default ListView;
