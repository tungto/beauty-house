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
} from '../actions';

const FilterContext = React.createContext();

const initialState = {
  isGridView: true,
  filtered_products: [],
  sort: 'price-inc',
  filters: {
    category: 'all',
    company: 'all',
    color: 'all',
    price: null,
    shipping: 'all',
  },
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, featured_products } = useProductsContext();
  //   console.log(products, featured_products);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
    dispatch({ type: SORT_PRODUCTS, payload: state.sort });
    dispatch({ type: FILTER_PRODUCTS, payload: state.filters });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    // console.log('check');
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateFilters = (filters) => {
    dispatch({ type: UPDATE_FILTERS, payload: filters });
  };

  const updateSort = (e) => {
    // console.log(sort.target.value);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateFilters, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
