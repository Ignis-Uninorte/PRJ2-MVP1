import React, { useState } from 'react';

interface ProductItemProps {
  imgSrc: string;
  title: string;
  shippingName: string;
  quantity: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ imgSrc, title, shippingName, quantity }) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(Number(e.target.value));
  };

  return (
    <div className="product-item-sc">
      <div className="title-img-product-sc">
        <img src={imgSrc} alt={title} className="product-image-sc" />
      </div>
      <div className="product-details-sc">
        <div className="shipping-method">
          <h3>{title}</h3>
          <h4>Shipping method</h4>
          <label>
            <input type="radio" name={shippingName} value="standard" defaultChecked /> Standard
          </label>
          <label>
            <input type="radio" name={shippingName} value="express" /> Express
          </label>
          <label>
            <input type="radio" name={shippingName} value="pickup" /> In-store Pickup
          </label>
        </div>
        <label htmlFor={`quantity-${shippingName}`} style={{ fontWeight: 'bold' }}>Quantity:</label>
        <select
          id={`quantity-${shippingName}`}  
          name={`quantity-${shippingName}`}  
          value={selectedQuantity}
          onChange={handleQuantityChange}
        >
          {[...Array(10).keys()].map((i) => (
            <option value={i} key={i}>{i}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductItem;