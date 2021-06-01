import {
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  // console.log(action.type);
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    // console.log(maxPrice);
    return {
      ...state,
      // IMPORTANT!
      //need to copy to new array to not mutate products data in product context
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_FILTERS) {
    // console.log(action.payload);
    const { name, value } = action.payload;
    // console.log(name, value);
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...all_products];

    if (text) {
      // console.log('search name');
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }

    if (category !== 'all') {
      // console.log(category);
      tempProducts = tempProducts.filter((product) => {
        // console.log(product.category);
        return product.category === category;
      });
    }

    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    if (color !== 'all') {
      // console.log(color);
      tempProducts = tempProducts.filter((product) =>
        product.colors.find((c) => c === color)
      );
    }

    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    tempProducts = tempProducts.filter((product) => {
      return product.price <= price;
    });

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    // console.log('sort product', sort, filtered_products);
    let tempProducts = [...filtered_products];
    // console.log(tempProducts);
    if (sort === 'price-dec') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sort === 'price-inc') {
      // console.log('checkkkk');
      tempProducts = tempProducts.sort((a, b) => {
        // console.log(a.price, b.price);
        return a.price - b.price;
      });
    } else if (sort === 'name-a') {
      tempProducts = tempProducts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    // console.log(tempProducts);
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  throw new Error(`there is no match for ${action.type}`);
};

export default filter_reducer;
