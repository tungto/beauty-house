import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <h5>© 2021 beautyhouse All rights reserved</h5>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 1rem;
  h5 {
    color: var(--clr-white);
  }
`;

export default Footer;
