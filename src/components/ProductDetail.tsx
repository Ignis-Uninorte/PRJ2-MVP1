import {useGetProducts} from '../hooks/useGetProduct'

interface ProductDetailProps {
    idProduct: string,
    category: string
}


const ProductDetail: React.FC<ProductDetailProps> = ({idProduct, category})  => {
    const {isLoading, isSuccess, isError, data: products} = useGetProducts();
    return (
        <div>
            {isLoading && (
                <p>Insertar Spinner</p>
            )}
            {isError && (
                <p>Insertar Error</p>
            )}
            {!isLoading && !isError && isSuccess && products && (
                <div className="product-layout">
                    { productCategory = products.find(product => product.category === category);}
                    <p>{idProduct}</p>
                    <p>{category}</p>
                    <p>Aca va la info del producto</p>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;