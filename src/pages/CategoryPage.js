import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsInCategory } from "../api/fakeStoreApi";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 products
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getProductsInCategory(categoryName);
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, [categoryName]);

  if (loading) return <div className="text-center p-10">Loading...</div>;

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setVisibleCount(showAll ? 4 : products.length); // Show all or initial count
  };

  const displayedProducts = showAll
    ? products
    : products.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-3 py-8">
      <h1 className="text-3xl font-normal text-center mb-6 capitalize">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length > 4 && (
        <div className="mt-8 text-center">
          {showAll ? (
            <button
              onClick={toggleShowAll}
              className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={toggleShowAll}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Show More ({products.length - 4} more)
            </button>
          )}
        </div>
      )}
    </div>
    // </div>
  );
};

export default CategoryPage;
