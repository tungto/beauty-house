import React from 'react';
import styled from 'styled-components';
import { BsGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper className=' '>
      <div className='btn-container'>
        <button
          className={`${
            grid_view ? 'icon grid-icon active' : 'icon grid-icon'
          }`}
          onClick={setGridView}
        >
          <BsGridFill />
        </button>
        <button
          className={`${
            !grid_view ? 'icon list-icon active' : 'icon list-icon'
          }`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p className='quantity'> {products.length} products found</p>
      <hr />
      <form className='sort-section'>
        <label htmlFor='sort'>Sort by </label>
        <select
          name='sort'
          id='sort'
          value={sort}
          className='sort-input'
          onChange={updateSort}
        >
          <option value='price-inc'>Price (Lowest)</option>
          <option value='price-dec'>Price (Highest)</option>
          <option value='name-a'>Name (a-z)</option>
          <option value='name-z'>Name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-right: 0.5rem;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
`;

export default Sort;
