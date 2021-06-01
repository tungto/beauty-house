import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useCartContext } from '../context/cart_context';
import { AmountButtons } from '../components';
import { formatPrice } from '../utils/helpers';

const CartItem = ({ image, name, price, color, id, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    console.log(id);
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  return (
    <Wrapper>
      <div className='item-container'>
        <div className='item'>
          <img src={image} alt={name} className='img' />
          <div className='info'>
            <h5 className='name'>{name}</h5>
            <span className='color-container'>
              Color:
              <span style={{ background: color }} className='color'></span>
            </span>
          </div>
        </div>
        <div className='price'>
          <h5 className='center'>{formatPrice(price)}</h5>
        </div>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <div className='subtotal'>
          <h5 className='center'> {formatPrice(price * amount)}</h5>
        </div>
        <button
          className='remove-btn'
          type='button'
          onClick={() => removeItem(id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  .item-container {
    display: grid;
    grid-template-columns: 316px 1fr 1fr 1fr auto;
    justify-content: center;
    align-items: center;
    .item {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
      justify-content: center;
      .img {
        width: 7rem;
        height: 5rem;
        border-radius: var(--radius);
      }
      .color-container {
        display: flex;
        align-items: center;
      }
      .color {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 30%;
        border: 1px solid grey;
        margin-left: 1rem;
      }
    }
    .center {
      text-align: center;
    }
  }
  .amount-btns {
    width: 140px;
    margin: 0 auto;
  }
  .remove-btn {
    border: none;
    cursor: pointer;
    background: white;
    svg {
      fill: red;
      font-size: 1rem;
    }
  }
`;

export default CartItem;
