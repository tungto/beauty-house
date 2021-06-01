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
  const colors = getUniqueValues(all_products, 'colors').slice(0, 4);

  // console.log(all_products);
  return (
    <Wrapper className=''>
      <input
        type='text'
        name='text'
        value={text}
        placeholder='Search'
        className='search-input filter-section'
        onChange={updateFilters}
      />
      <div className='categories filter-section'>
        <h5 className='title'>category</h5>
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
      <div className='company filter-section'>
        <h5 className='title' htmlFor='company'>
          company
        </h5>
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
      <div className='colors filter-section'>
        <h5>Colors</h5>
        <div className='color-container'>
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
                  All
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
      </div>
      <div className='price filter-section'>
        <h5>price</h5>
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
      <div className='shipping filter-section'>
        <label htmlFor='shipping' className='label'>
          Free Shipping
        </label>
        <input
          type='checkbox'
          name='shipping'
          onChange={updateFilters}
          id='shipping'
          checked={shipping}
        />
      </div>
      <button
        type='button'
        className='btn filter-section'
        onClick={clearFilters}
      >
        clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .search-input {
    padding: 0.2rem;
  }
  .filter-section {
    margin-bottom: 1rem;
  }
  .categories,
  .company,
  .colors {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .color-container {
    display: flex;
  }
  .color-btn {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    margin: 0.2rem;
  }
  .shipping {
    display: flex;
    align-items: center;
    .label {
      margin-right: 1rem;
    }
  }
  .active,
  .all-btn.active {
    border-bottom: 1px solid grey;
  }
  button {
    display: block;
    background: none;
    border: none;
    padding: 0.2rem;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

export default Filters;
