import React, { useContext, useReducer } from 'react';
import { products_url as url } from '../utils/constants';
import axios from 'axios';

import reducer from '../reducers/products_reducer';
import { useEffect } from 'react';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
} from '../actions';

const initialState = {
  featured_products: [],
  products: [],
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(`${url}?_page=1&_limit=20`);
      const products = response.data.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data[0];
      if (Array.isArray(singleProduct) && singleProduct.length === 0) {
        dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        // dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
      }
      console.log('singleProduct', typeof singleProduct);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
      console.log('fetch single product', singleProduct);
      // dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      // because when url wrong fetch still return empty arary
      // then catch will not working
    } catch (error) {
      console.log('errrorrr');
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
      // dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
