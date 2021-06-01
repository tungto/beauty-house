import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { CartHeader, CartItem } from '../components';
import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center'>
      <CartHeader />
      <hr />
      {cart.map((item) => {
        console.log(item);
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='action-btn'>
        <Link to='/api/products' className='btn-continue btn'>
          continue shopping
        </Link>
        <button className='btn-clear btn' type='button' onClick={clearCart}>
          clear cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .action-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  hr {
    border-bottom: 1px solid #eee;
  }
  .btn-continue {
    background: #50929c;
    color: var(--clr-white);
  }
  .btn-clear {
    background: #8c4e4e;
    color: var(--clr-white);
  }
`;

export default CartContainer;
