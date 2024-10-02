import React from 'react'
import "../styles/cart.css"
import { cart } from '../utils/cartData';
import ProductItem from '../components/ProductItem';
import OrderSummary from '../components/OrderSummary';
import MainLayout from '../layouts/MainLayout';
import Breadcrumb from '../components/Breadcrumb';

const ShoppingCart: React.FC = () => {
    return (
 <MainLayout> 

<main className="main-sc">
          <h2>Products</h2>
          <nav className="breadcrumb">
          <Breadcrumb isShoppingCart={true} /> {/* Home / ShoppingCart */}
          </nav>
          <div className="container-sc">
            <div className="product-list-sc">
             {cart.products.map(product=>(
               <ProductItem
               key={product.id}
               imgSrc={product.imgSrc}
               title={product.title}
               shippingName={product.shippingName}
               quantity={product.quantity}
               />
             ))}
            </div>
            
            <OrderSummary 
              subtotal={cart.subtotal}
              shippingCost={cart.shippingCost}
              discounts={cart.discounts}
              vat={cart.vat}
              total={cart.total}
            />
          </div>
        </main>
      
</MainLayout>
      );
};





export default ShoppingCart;



