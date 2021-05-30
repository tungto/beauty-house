import React, { useContext, useReducer } from 'react';
import { products_url as url } from '../utils/constants';
import axios from 'axios';

import reducer from '../reducers/products_reducer';
import { useEffect } from 'react';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
  featured_products: [],
  filtered_products: [],
  products: [],
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  isGridView: true,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(`${url}?_page=1&_limit=20`);
      const products = response.data.data;
      console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  //   const setGridView= () => {
  // 	  dispatch({type: })
  //   }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
