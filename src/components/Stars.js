import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styled from 'styled-components';

const Stars = ({ stars, reviews }) => {
  // console.log(stars);
  let tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className='stars'>{tempStars} </div>

      <span> ({reviews} customer reviews)</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .stars {
    margin-right: 1rem;
  }
  .Stars-btn {
    display: flex;
    align-items: center;
  }
`;

export default Stars;
