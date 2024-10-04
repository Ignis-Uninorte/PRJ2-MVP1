// src/components/OrderSummary.tsx
import React from 'react';
import "../styles/orderSummary.css"
interface OrderSummaryProps {
  subtotal: number;
  shippingCost: number;
  discounts: number;
  vat: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, shippingCost, discounts, vat, total }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        <li>Subtotal: ${subtotal.toFixed(2)}</li>
        <li>Shipping Cost: ${shippingCost.toFixed(2)}</li>
        <li>Discounts: ${discounts.toFixed(2)}</li>
        <li>VAT: ${vat.toFixed(2)}</li>
        <li>Total: ${total.toFixed(2)}</li>
      </ul>
      <button id="initiate-payment">Initiate Payment</button>
    </div>
  );
};

export default OrderSummary;
