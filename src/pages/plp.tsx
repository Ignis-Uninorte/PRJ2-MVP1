import React from 'react';
import {products} from "../utils/data";
import MainLayout from '../layouts/MainLayout';
import ProductCard from "../components/ProductCard";


export interface Product {
    id: number;
    category: string;
    items: [object, object, object, object, object];
}

const Plp: React.FC = () => {
    return (
        <MainLayout>
            <div>

            </div>
        </MainLayout>
        );
    };

export default Plp;