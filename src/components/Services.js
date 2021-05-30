import React from 'react';
import { services } from '../utils/constants';
import styled from 'styled-components';
const Services = () => {
  return (
    <Wrapper>
      <section className='section-center'>
        <div className='header'>
          <h3 className='title'>
            Custom Furniture <br /> Built Only For You
          </h3>
          <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className='service-center'>
          {services.map((service) => {
            const { id, text, icon, title } = service;
            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4 className='title'>{title}</h4>
                <p className='text'>{text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem;
  background: #6a8ba2;
  .header {
    .title {
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
    .service-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      gap: 2rem;
      margin-bottom: 3rem;
    }
    .service {
      padding: 2.5rem 2rem;
      background-color: lightblue;
      border-radius: var(--radius);
    }
    .icon {
      font-size: 2.5rem;
    }
  } ;
`;
export default Services;
