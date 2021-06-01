import React from 'react';
import styled from 'styled-components';
import Hero1 from '../assets/hero.jpg';
import Hero2 from '../assets/hero2.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Wrapper className='section-center section'>
      <div className='left-hero'>
        <h1>
          design your <br />
          Comfort Zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link className='btn hero-btn' to='/api/products'>
          shop now
        </Link>
      </div>
      <div className='right-hero'>
        <img src={Hero1} alt='decor' className='main-img' />
        <img src={Hero2} alt='decor' className='accent-img' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  margin-top: 5rem;
  .left-hero {
    width: 50%;
  }
  .right-hero {
    width: 50%;
    position: relative;
  }
  .right-hero:before {
	width: 10%;
    content: '';
    background-color: lightblue;
    right: 390px;
    height: 70%;
    position: absolute;
    bottom: 17px;
	border-radius: var(--radius);
}
  }
  .main-img {
    position: absolute;
    width: 290px;
    height: 150px;
    z-index: 2;
    border-radius: var(--radius);
    bottom: -0;
  }
  .accent-img {
    position: absolute;
    border-radius: var(--radius);
    width: 400px;
    height: 530px;
    right: 0;
    bottom: 0;
  }
  .hero-btn{
	  background-color: lightcoral;
	  color: var(--clr-white);
  }
  .hero-btn:hover{
	  opacity: 0.6;
	  color: var(--clr-black);
  }
`;

export default AboutPage;
