import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { formatPrice, getUniqueValues } from '../utils/helpers';
const Filters = () => {
  const {
    updateFilters,
    clearFilters,
    all_products,
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
  } = useFilterContext();

  const companies = getUniqueValues(all_products, 'company');
  const categories = getUniqueValues(all_products, 'category');
  const colors = getUniqueValues(all_products, 'colors');

  console.log(all_products);
  return (
    <Wrapper className=' '>
      <input
        type='text'
        name='text'
        value={text}
        placeholder='search'
        className='search-input'
        onChange={updateFilters}
      />
      <div className='categories'>
        <h3 className='title'>category</h3>
        {categories.map((c, index) => (
          <button
            name='category'
            type='button'
            key={index}
            className={`${c === category ? 'active' : null}`}
            onClick={updateFilters}
          >
            {c}
          </button>
        ))}
      </div>
      <div className='company'>
        <label className='title' htmlFor='company'>
          company
        </label>
        <select
          name='company'
          id='company'
          onChange={updateFilters}
          value={company}
        >
          {companies.map((c) => (
            <option value={c} name={c} key={c}>
              {c.substring(0, 12)}
            </option>
          ))}
        </select>
      </div>
      <div className='colors'>
        {colors.map((c, index) => {
          // console.log(c);
          if (c === 'all') {
            return (
              <button
                key={index}
                className={`${color === c ? 'all-btn active' : 'all-btn'}`}
                data-color='all'
                onClick={updateFilters}
                name='color'
              >
                all
              </button>
            );
          }
          return (
            <button
              key={c}
              style={{ background: c }}
              className={`${color === c ? 'color-btn active' : 'color-btn'}`}
              data-color={c}
              onClick={updateFilters}
              name='color'
            >
              {color === c ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
      <div className='price'>
        <p className='price'>{formatPrice(price)}</p>
        <input
          type='range'
          name='price'
          min={min_price}
          max={max_price}
          value={price}
          onChange={updateFilters}
        />
      </div>
      <div className='shipping'>
        <label htmlFor='shipping'>free shipping</label>
        <input
          type='checkbox'
          name='shipping'
          onChange={updateFilters}
          id='shipping'
          checked={shipping}
        />
      </div>
      <button type='button' className='btn' onClick={clearFilters}>
        clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .color-btn {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    margin: 0.2rem;
  }
`;

export default Filters;
