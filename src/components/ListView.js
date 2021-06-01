import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatPrice, randomIndex } from '../utils/helpers';
const ListView = ({ products }) => {
  console.log(products);
  return (
    <Wrapper className=' '>
      {products.map((product) => {
        const { name, id, price, images, description } = product;
        return (
          <article key={id}>
            <img
              src={images[randomIndex].url}
              alt={images[randomIndex].filename}
              className='img'
            />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/api/products/${id}`} className='btn'>
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
    grid-template-columns: 1fr 3fr;
    .img {
      width: 90%;
      height: 60%;
    }
  }
`;

export default ListView;
