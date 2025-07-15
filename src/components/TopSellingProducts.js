import React from 'react';
import ProductSlider from './ProductSlider';

const TopSellingProducts = ({ products }) => {
  // Since FakeStoreAPI doesn't provide sales data, we can simulate "top-selling"
  // by sorting by the rating count, which can be an indicator of popularity.
  const sortedProducts = [...products].sort(
    (a, b) => b.rating.count - a.rating.count
  );

  // Take the top 8 products to display in the slider
  const topProducts = sortedProducts.slice(0, 8);

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">Top Selling Products</h2>
      <ProductSlider products={topProducts} />
    </div>
  );
};

export default TopSellingProducts;