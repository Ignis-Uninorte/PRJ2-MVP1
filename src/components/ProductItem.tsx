import React from 'react';

const ProductItem: React.FC =({ imgSrc, title, shippingName })  => {
  return (
    <div className="product-item-sc">
      <div className="title-img-product-sc">
        <img src={imgSrc} alt={title} className="product-image-sc" />
      </div>
      <div className="product-details-sc">
        <div className="shipping-method">
          <h3>{title}</h3>
          <h4>Shipping method</h4>
          <label><input type="radio" name={shippingName} value="standard" defaultChecked /> Standard</label>
          <label><input type="radio" name={shippingName} value="express" /> Express</label>
          <label><input type="radio" name={shippingName} value="pickup" /> In-store Pickup</label>
        </div>
        <label htmlFor={`quantity-${shippingName}`} style={{ fontWeight: 'bold' }}>Quantity:</label>
        <select id={`quantity-${shippingName}`} name={`quantity-${shippingName}`}>
          {[...Array(10).keys()].map((i) => (
            <option value={i} key={i}>{i}</option>
          ))}
        </select>
      </div>
    </div>
  );
}


export default ProductItem;