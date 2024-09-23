import React from 'react';
import MainLayout from '../layouts/MainLayout';

// Mock product data for testing
const products = [
  {
    category: 'Computers',
    items: [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Desktop' },
    ],
  },
  {
    category: 'Televisions',
    items: [
      { id: 3, name: 'LED TV' },
      { id: 4, name: 'OLED TV' },
    ],
  },
  {
    category: 'Phones',
    items: [
      { id: 5, name: 'iPhone' },
      { id: 6, name: 'Samsung Galaxy' },
    ],
  },
];

// Simplified PLP component for testing
const Plp: React.FC<{ typeOfProduct: string }> = ({ typeOfProduct }) => {
  // Find the products for the given category
  const productCategory = products.find(
    (product) => product.category === typeOfProduct
  );

  return (
    <MainLayout>
    <div>
      <h1>Product Listing Page</h1>
      <h2>Category: {typeOfProduct}</h2>

      {productCategory ? (
        <ul>
          {productCategory.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
    </MainLayout>
  );
};

export default Plp;
