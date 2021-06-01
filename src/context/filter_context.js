import React, { useContext, useReducer } from 'react';
import { useEffect } from 'react';
import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './products_context';
import {
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  LOAD_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const FilterContext = React.createContext();

const initialState = {
  grid_view: true,
  filtered_products: [],
  all_products: [],
  sort: 'price-inc',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    shipping: false,
    max_price: 0,
    min_price: 0,
  },
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters, products]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
      console.log(value);
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    console.log(name, value);
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    // console.log('update sort', name, value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilters,
        updateSort,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
