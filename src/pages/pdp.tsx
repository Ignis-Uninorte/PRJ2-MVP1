import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductDetail from '../components/ProductDetail';

const Pdp: React.FC = () => {
    const { category, idProduct } = useParams<{ category: string, idProduct: string}>(); //Obtiene los parámetros de la URL
    return (
        <MainLayout>
        <div>
          <ProductDetail idProduct={idProduct || "-1"} category={category || "Tablets"}/>
        </div>
        </MainLayout>
    );
};

export default Pdp;