import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const ShoppingCart: React.FC = () => {
  return (
    <div>
      <Breadcrumb isShoppingCart={true} /> {/* Home / ShoppingCart */}
      <h1>Your Shopping Cart</h1>
      {/* Shopping cart contents here */}
    </div>
  );
};

export default ShoppingCart;
