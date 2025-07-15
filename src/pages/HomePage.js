import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/fakeStoreApi";
import ProductSlider from "../components/ProductSlider";
import HeroSlider from "../components/HeroSlider";
import TopSellingProducts from "../components/TopSellingProducts";

const HomePage = () => {
  const [selectedCategories, setSelectedCategories] = useState([
    "jewelery",
    "men's clothing",
  ]);
  const [allProducts, setAllProducts] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndGroupProducts = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        setAllProducts(products); // Store all products for the top-selling section
        const grouped = products.reduce((acc, product) => {
          const category = product.category;
          if (!selectedCategories.includes(category)) return acc; // Filter categories

          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);
          return acc;
        }, {});
        setProductsByCategory(grouped);
      } catch (err) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndGroupProducts();
  }, []);

  const isCategorySelected = (category) =>
    selectedCategories.includes(category);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto  py-1">
      <HeroSlider />
      {Object.keys(productsByCategory).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-3 capitalize">
            {category}
          </h2>
          <ProductSlider products={productsByCategory[category]} />
        </div>
      ))}
      <TopSellingProducts products={allProducts} />
    </div>
  );
};

export default HomePage;
