import {useGetProducts} from '../hooks/useGetProduct';
import '../styles/productDetail.css';
import {ProductItem} from '../types/plp.type' 
import LoadingSpinner from '../components/Spinner';
import ErrorComponent from '../components/Error';
import Breadcrumb from '../components/Breadcrumb';

interface ProductDetailProps {
    idProduct: string,
    category: string
}

const ProductDetail: React.FC<ProductDetailProps> = ({idProduct, category})  => {
    const {isLoading, isSuccess, isError, data: products} = useGetProducts();
    const productCategory = products?.find(product => product.category === category);
    const product = productCategory?.products.find(
        (product: ProductItem) => product.id === Number(idProduct)
    )
    const priceDiscount = Number(
        ((product?.price ?? 0) - (product?.price ?? 0) * (product?.discount ?? 0) / 100).toFixed(2)
    );    

    return (
        <div>
            {isLoading && (
                <LoadingSpinner />
            )}
            {isError && (
                <ErrorComponent message="We couldn't find what you were looking for :("/>
            )}
            {!isLoading && !isError && isSuccess && products && (
                <div className="product-layout">
                    <Breadcrumb category={category} productName={product?.name} />
                    <div className="image-container-pd">
                        <img src={product?.image} alt="Product Image" className="img-product"/>
                    </div>
                    <section className="product-info">
                        <section className="product-details">
                            <h1>{product?.name}</h1>
                            <div className="price">
                                <p className="normal-price"><s>${product?.price}</s></p>
                                <div className="price-discount">
                                    <p>${priceDiscount}</p>
                                    <p className="discount">({product?.discount}% off)</p>
                                </div>
                            </div>
                            <ul>
                                {product?.description.map(
                                    desc => <li key={desc.title}><strong>{desc.title} </strong>{desc.description}</li>
                                )}
                            </ul>
                            <button type="button">
                                <i className="fa-solid fa-cart-shopping"></i>Add to cart
                            </button>
                        </section>
                    </section>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;
