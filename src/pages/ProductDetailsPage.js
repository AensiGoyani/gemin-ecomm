import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/fakeStoreApi";
import Slider from "react-slick";
import { useCart } from "../context/CartContext";
import { BsBag, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(productId);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={"full" + i} className="text-yellow-500" />);
    }
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className="text-yellow-500" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<BsStar key={"empty" + i} className="text-yellow-500" />);
    }

    return stars;
  };

  if (loading)
    return <div className="text-center p-10">Loading product...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">{error}</div>;
  if (!product)
    return <div className="text-center p-10">Product not found.</div>;

  return (
    <div className="container mx-auto px-3 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div>
          {/* The API only gives one image, so we repeat it to show slider functionality */}

          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-normal mb-2">{product.title}</h1>
          <p className="text-gray-500 capitalize mb-4">{product.category}</p>
          <p className="text-3xl font-bold text-red-600 mb-4">
            ${product.price}
          </p>
          <h2 className="flex items-center font-normal text-xl text-black  gap-2 my-4 ">
            Rating: {product.rating && product.rating.rate}{" "}
            <span className="flex gap-1 ml-2">
              {renderStars(product.rating.rate)}
            </span>
          </h2>
          <p className="text-gray-700 font-normal leading-7 mb-6">
            {product.description}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
