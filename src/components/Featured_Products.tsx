import React from 'react';
import '../styles/featuredProducts.css';
import { Link } from 'react-router-dom';
import { useFeaturedProducts } from '../hooks/useFeaturedProducts';
import Spinner from './Spinner';
import ErrorComponent from './Error';

const FeaturedProducts: React.FC = () => {
  const { data: products, isLoading, isError } = useFeaturedProducts();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorComponent message={'Error loading featured products.'} />;
  }

  return (
    <section className="lp-section-2">
      {products.map((product: { id: number, name: string, image: string, price: number, discount: number }) => {
        // Calculate the discounted price
        const discountedPrice = product.price ? product.price * (1 - product.discount / 100) : 0; //calculates the discounted price

        return (
          <div key={product.id} className="lp-product">
            <Link to={`/product/${product.id}`}>
              {/* Usamos directamente la URL de la imagen proporcionada por la API */}
              <img src={product.image} alt={product.name} />
            </Link>
            <h3>{product.name}</h3>
            <p className="lp-price">Price: ${product.price?.toFixed(2) || 'N/A'}</p>
            <p className="lp-discounted-price">
              Discounted Price: ${discountedPrice.toFixed(2)}{" "}
              <span className="lp-discount">({product.discount ?? 0}% off)</span>
            </p>
            <button className="lp-button">Add to Cart</button>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedProducts;

