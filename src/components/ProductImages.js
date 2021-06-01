import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images = [''] }) => {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <Wrapper>
      <div className='main-img'>
        <img src={images[mainIndex].url} alt='' />
      </div>
      <div className='other-images'>
        {images.map((img, index) => {
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
  padding-bottom: 110px;
  .main-img img {
    border-radius: var(--radius);
  }
  .other-images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    img {
      width: 60px;
      border-radius: var(--radius);
    }
  }
  .active {
    border: 2px solid #50929c;
  }
`;

export default ProductImages;
