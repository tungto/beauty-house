import React from 'react';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { useCartContext } from '../context/cart_context';
import { PageHero } from '../components';
import styled from 'styled-components';

const CheckoutPage = () => {
  const { myUser } = useUserContext();
  const { total_amount } = useCartContext();
  console.log(myUser);
  return (
    <Wrapper className='check-out-page'>
      <div className='checkout-container'>
        <PageHero title='checkout' />
        <div className='checkout-info section'>
          <div className='head'>
            <h3 className=''>Hello, {myUser.given_name}</h3>
            <p>
              Your total is: <strong>{formatPrice(total_amount)}</strong>
            </p>
          </div>
          <form action='submit' className='card'>
            <div className='input'>
              <input
                type='text'
                placeholder='Card number'
                className='card-number'
              />
              <input type='text' placeholder='MM/ YY CVC' className='cvc' />
            </div>
            <button type='button' className='btn btn-pay'>
              Pay
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(85vh + 0.1rem);
  .checkout-info {
    width: 23rem;
    height: 70vh;
    margin: 0 auto;
    input {
      width: 8rem;
      padding: 0.5rem;
      border: 1px solid grey;
    }
    .card {
      padding: 3rem;
      width: 23rem;
      border-radius: var(--radius);
      box-shadow: rgb(50 50 93 / 10%) 0px 0px 0px 0.5px,
        rgb(50 50 93 / 10%) 0px 2px 5px 0px, rgb(0 0 0 / 7%) 0px 1px 1.5px 0px;
    }
    .card-number {
      border-right: none;
    }
    .btn-pay {
      display: inline-block;
      width: 16rem;
      background: orange;
      color: white;
      :hover {
        opacity: 0.6;
      }
    }
  }
`;

export default CheckoutPage;
