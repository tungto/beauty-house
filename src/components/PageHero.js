import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const PageHero = ({ title, product }) => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/api/products/'>/ Products</Link>} / {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem;
  background: #aac9e0;
`;

export default PageHero;
