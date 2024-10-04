import {useGetProducts} from '../hooks/useGetProduct';
import {ProductItem} from '../types/plp.type' 
import LoadingSpinner from '../components/Spinner';
import ErrorComponent from '../components/Error';
import '../styles/productSpecification.css';

const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

interface ProductSpecificationProps {
    idProduct: string,
    category: string
}

const ProductSpecification: React.FC<ProductSpecificationProps> = ({idProduct, category}) => {
    const {isLoading, isSuccess, isError, data: products} = useGetProducts();
    const productCategory = products?.find(product => product.category === category);
    const product = productCategory?.products.find(
        (product: ProductItem) => product.id === Number(idProduct)
    )
    return (
        <div>
            {isLoading && (
                <LoadingSpinner />
            )}
            {isError && (
                <ErrorComponent message="We couldn't find what you were looking for :("/>
            )}
            {!isLoading && !isError && isSuccess && product && (
                <div className="productSpecification-layout">
                    <h2>Technical Specifications</h2>
                    <table>
                        <tbody>
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{formatKey(key)}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default ProductSpecification;