import React from "react";
import {ProductItem} from "../types/plp.type";
import "../styles/productCard.css";

function getDiscountPrice(price: number, discount: number): number{
    return Number((price - (price * discount / 100)).toFixed(2));
}

interface ProductCardProps {
    product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) =>{
    const priceDiscount = getDiscountPrice(product.price, product.discount);
    return (
        <a href="#" key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="short-description">{product.description}</p>
            <div className="review">
                <i className="fa-solid fa-star"></i>5
            </div>
            <p className="normal-price"><s>${product.price}</s></p>
            <div className="price-discount">
                <p>${priceDiscount}</p>
                <p className="discount">({product.discount}% off)</p>
            </div>
            <button type="button">
                <i className="fa-solid fa-cart-shopping"></i>Add to cart
            </button>
        </a>
    );
}

export { ProductCard };