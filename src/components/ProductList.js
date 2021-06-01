import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { GridView, ListView } from '../components';

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();
  // console.log(filtered_products);
  if (filtered_products.length < 1) {
    return <h5>Sorry, no products found</h5>;
  }

  if (!grid_view) {
    return <ListView products={filtered_products} />;
  }
  return <GridView products={filtered_products}>product list</GridView>;
};

export default ProductList;
