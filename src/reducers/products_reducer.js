import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    console.log('loading products');
    const featured_products = action.payload
      .filter((product) => product.featured === true)
      .slice(0, 3);
    console.log(featured_products);
    return {
      ...state,
      featured_products,
      producst: action.payload,
      products_loading: false,
      filtered_products: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, products_error: true };
  }
  throw new Error(`No Matching ${action.type} - action`);
};

export default products_reducer;
