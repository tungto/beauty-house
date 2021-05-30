import React from 'react';
import styled from 'styled-components';
const Contact = () => {
  return (
    <Wrapper className='section'>
      <form className='form-container center-center'>
        <div className='left-form'>
          <div className='header'>
            <h4>Join our newsletter and get 20% off</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </div>
        <div className='right-form'>
          <input type='text' placeholder='Enter Email' className='input' />
          <button type='button' className='  subcribe-btn'>
            Subcribe
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem;
  background: #f1f5f8;
  .form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .right-form {
    text-align: right;
    input {
      width: 70%;
      padding: 0.5rem 1rem;
      padding-left: 1rem;
      border: 2px solid black;
      border-right: none;
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
      background: #272727;
      color: white;
    }
    .subcribe-btn {
      border: 2px solid black;
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      padding: 0.5rem 1rem;
      cursor: pointer;
      background: orange;
    }
  }
`;

export default Contact;
