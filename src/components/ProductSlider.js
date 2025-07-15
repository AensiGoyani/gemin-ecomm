import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';

const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: products.length > 3,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {products.map(product => <div key={product.id} className="p-2"><ProductCard product={product} /></div>)}
    </Slider>
  );
};

export default ProductSlider;