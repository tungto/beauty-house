import {
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
} from '../actions';

const filter_reducer = (state, action) => {
  const { sort, filtered_products: products } = state;
  if (action.type === LOAD_PRODUCTS) {
    console.log('load product');
    return {
      ...state,
      filtered_products: action.payload,
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, isGridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, isGridView: false };
  }

  if (action.type === UPDATE_FILTERS) {
    return { ...state };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    console.log(sort);
    let tempProducts = [...products];
    if (sort === 'price-dec') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'price-inc') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'name-a') {
      tempProducts = tempProducts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    console.log('load sorted product');
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === FILTER_PRODUCTS) {
    return { ...state };
  }

  throw new Error(`there is no match for ${action.type}`);
};

export default filter_reducer;
