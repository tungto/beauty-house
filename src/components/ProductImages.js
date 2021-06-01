import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const ProductImages = ({ images = [''] }) => {
  // console.log(images);
  if (images.images && images.images.length > 0) {
    // console.log(images.images[0]);
  }
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <Wrapper>
      <div className='main-img'>
        <img src={images[mainIndex].url} alt='' />
      </div>
      <div className='other-images'>
        {images.map((img, index) => {
          // console.log(index === mainIndex);
          return (
            <img
              src={img.url}
              alt={img.filename}
              key={index}
              className={`${index === mainIndex ? 'active' : null}`}
              onClick={() => setMainIndex(index)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-img img {
    border-radius: var(--radius);
  }
  .other-images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    img {
      width: 120px;
      border-radius: var(--radius);
    }
  }
  .active {
    border: 1px solid grey;
  }
`;

export default ProductImages;
