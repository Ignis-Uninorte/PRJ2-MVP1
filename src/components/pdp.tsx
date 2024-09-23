import React from 'react';
import { useParams } from 'react-router-dom';

const pdp: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtiene el ID del producto desde la URL

  return (
    <div>
      <h1>Product Detail for Product ID: {id}</h1>
      {/* Aquí agregarás el contenido del producto más adelante */}
    </div>
  );
};

export default pdp;