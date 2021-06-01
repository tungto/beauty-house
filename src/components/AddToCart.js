import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { FaMinus, FaPlus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { AmountButtons } from '../components';
import { Link } from 'react-router-dom';

const AddToCart = ({ product }) => {
  console.log(product);
  const { colors, id, stock } = product;
  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(colors[0]);
  const { addToCart } = useCartContext();

  console.log(mainColor);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className='colors'>
        <h4>colors</h4>
        {colors.map((c, index) => (
          <span
            className={`${c === mainColor ? 'color active' : 'color'}`}
            key={index}
            style={{ backgroundColor: c }}
            onClick={() => setMainColor(c)}
          ></span>
        ))}
      </div>
      <div className='amount-container'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
      </div>
      <Link
        to='/cart'
        className='add-btn btn'
        onClick={() => addToCart(id, mainColor, amount, product)}
      >
        add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .color {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid grey;
    margin: 0.5rem;
    opacity: 0.4;
  }
  .amount-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .active {
    opacity: 1;
  }
`;

export default AddToCart;
