import React from 'react';
import MSIGE78 from '../assets/MSI_Raider_GE78_Intel_Core_i9.jpg';
import MacBookProM1X from '../assets/MacBook Pro M1X.jpg';
import '../styles/featuredProducts.css';

const products = [
  {
    id: 1,
    name: "MSI Raider GE78",
    image: MSIGE78,
    price: 1499,
    discountedPrice: 1199.2,
    discount: 20,
  },
  {
    id: 2,
    name: "MacBook Pro M1X",
    image: MacBookProM1X,
    price: 3999,
    discountedPrice: 3199.2,
    discount: 20,
  },
  // Add other products similarly...
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="lp-section-2">
      {products.map((product) => (
        <div key={product.id} className="lp-product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="lp-price">Price: ${product.price.toFixed(2)}</p>
          <p className="lp-discounted-price">
            Discounted Price: ${product.discountedPrice.toFixed(2)}{" "}
            <span className="lp-discount">({product.discount}% off)</span>
          </p>
          <button className="lp-button">Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;