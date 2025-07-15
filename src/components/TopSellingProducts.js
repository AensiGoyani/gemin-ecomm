import React from 'react';
import ProductSlider from './ProductSlider';

const TopSellingProducts = ({ products }) => {
  
  const sortedProducts = [...products].sort(
    (a, b) => b.rating.count - a.rating.count
  );

  // Take the top 8 products to display in the slider
  const topProducts = sortedProducts.slice(0, 10);

  return (
    <div className="my-12">
      <h2 className="text-2xl font-normal text-gray-800 mb-4 capitalize">Top Selling Products</h2>
      <ProductSlider products={topProducts} />
    </div>
  );
};

export default TopSellingProducts;