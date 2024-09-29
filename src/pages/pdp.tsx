import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Pdp: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtiene el ID del producto desde la URL

    return (
        <MainLayout>
        <h1>Product Detail for Product ID: {id}</h1>
        {/* Aquí agregarás el contenido del producto más adelante */}
        </MainLayout>
    );
};

export default Pdp;