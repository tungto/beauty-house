import React from 'react';
import { PageHero } from '../components';
import hero from '../assets/hero2.jpg';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <Wrapper>
      <main className='about'>
        <PageHero title='About' />
        <section className='content section-center'>
          <img src={hero} alt='about-img' className='about-img' />
          <div className='info'>
            <h1 className='title'>Our Story</h1>
            <div className='underline'></div>
            <p className='text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    .about-img {
      width: 80%;
      height: 90%;
    }
    h1 {
      text-align: left;
      margin-top: 0;
      margin-bottom: 1rem;
    }
    .underline {
      height: 5px;
      width: 200px;
      background-color: brown;
      margin-bottom: 2rem;
    }
  }
`;
export default AboutPage;
