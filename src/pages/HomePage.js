import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/fakeStoreApi";
import ProductSlider from "../components/ProductSlider";
import HeroSlider from "../components/HeroSlider";
import TopSellingProducts from "../components/TopSellingProducts";
import { Link } from "react-router-dom";

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

  

  return (
    <div className="container mx-auto px-3  py-1">
      <HeroSlider />
      {Object.keys(productsByCategory).map((category) => (
        <div key={category} className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-normal text-gray-800 mb-4 mt-3 capitalize">
              {category}
            </h2>
            <Link className="capitalize pr-3 text-2xl hover:text-red-500 hover:underline" to={`/category/${category}`}>
              view all
            </Link>
          </div>

          <ProductSlider products={productsByCategory[category]} />
        </div>
      ))}
      <TopSellingProducts products={allProducts} />
    </div>
  );
};

export default HomePage;
