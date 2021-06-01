import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { loginWithRedirect, myUser } = useUserContext();
  console.log();
  return (
    <Wrapper className='  section-center'>
      <div className='info'>
        <div className='subtotal'>
          <h5>Subtotal:</h5>
          <h5>{formatPrice(total_amount)}</h5>
        </div>
        <div className='shipping-fee'>
          <p>shipping fee:</p>
          <p>{formatPrice(shipping_fee)}</p>
        </div>
        <div className='total'>
          <h4>Order Total:</h4>
          <h4>{formatPrice(total_amount + shipping_fee)}</h4>
        </div>
      </div>
      <div className='action-btn'>
        {myUser ? (
          <Link to='/checkout' className='btn-checkout btn'>
            checkout
          </Link>
        ) : (
          <button className='btn-login btn' onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 5rem;
  margin-right: 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  .info {
    border: 1px solid #ccc;
    width: 23rem;
    padding: 1rem;
    .total,
    .subtotal,
    .shipping-fee {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      text-align: center;
    }
  }
  .btn-login,
  .btn-checkout {
    width: 23rem;
    background: #f39e35;
    color: var(--clr-white);
  }
`;

export default CartTotal;
