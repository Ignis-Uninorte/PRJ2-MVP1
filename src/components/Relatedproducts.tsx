import React from 'react';
import { ProductCard } from '../components/ProductCard'; 
import { useGetProducts } from '../hooks/useGetProduct'; 
import '../styles/relatedProducts.css'; 


interface RelatedProductsProps {
    category: string;
    idProduct: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ category, idProduct }) => {

    const { isLoading, isSuccess, isError, data: products } = useGetProducts();

    // filtrando los productos de la misma cat pa que se pinten 
    const productCategory = products?.find(product => product.category === category);
    const relatedProducts = productCategory?.products.filter(
        product => product.id !== Number(idProduct)
    );

    return (
        <section className="related-products">
            <h2>You May Also Like</h2>

            {isLoading && <p>Insertar Spinner</p>}
            {isError && <p>Insertar Error</p>}
            {isSuccess && relatedProducts && relatedProducts.length > 0 && (
                <div className="related-products-list">
                    {relatedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}  
                            category={category} 
                        />
                    ))}
                </div>
            )}

            
            {isSuccess && relatedProducts && relatedProducts.length === 0 && (
                <p>No hay productos relacionados disponibles.</p>
            )}
        </section>
    );
};

export default RelatedProducts;
