import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
const Filters = () => {
  const {
    updateFilters,
    updateSort,
    filtered_products: products,
  } = useFilterContext();
  // console.log(products);
  const companies = [...new Set(products.map((product) => product.company))];
  const categories = [
    ...new Set(products.map((product) => product.categoryId)),
  ];
  // console.log(categories);
  return (
    <Wrapper className='section'>
      <input type='text' placeholder='Search' />
      <div className='categories'>
        <h3 className='title'>category</h3>
        {categories.map((category) => (
          <p key={category} className='category'>
            {category.substring(0, 10)}
          </p>
        ))}
      </div>
      <div className='company'>
        <label className='title' htmlFor='company'>
          company
        </label>
        <select name='company' id='company'>
          {companies.map((company) => (
            <option value={company} name={company} key={company}>
              {company.substring(0, 12)}
            </option>
          ))}
        </select>
      </div>
      <div className='colors'>
        <div className='all'>All</div>
      </div>
      <div className='price'>
        <input type='range' min={0} max={5000} onChange={updateFilters} />
      </div>
      <div className='shipping'>
        <label htmlFor='shipping'>free shipping</label>
        <input type='checkbox' name='shipping' onChange={updateFilters} />
      </div>
      <button type='button' className='btn' onClick={updateFilters}>
        clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Filters;
