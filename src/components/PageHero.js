import React from 'react';
import styled from 'styled-components';
const PageHero = ({ title }) => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <h2>Home / {title}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem;
  background: #aac9e0;
`;

export default PageHero;
