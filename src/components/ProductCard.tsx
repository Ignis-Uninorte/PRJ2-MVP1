import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons'
import {ProductItem} from "../types/plp.type";
import "../styles/productCard.css";

function getDiscountPrice(price: number, discount: number): number{
    return Number((price - (price * discount / 100)).toFixed(2));
}

// Función para generar las estrellas según el rating
const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; // Determina si hay media estrella
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFD43B" }} />
        );
    }
    if (halfStar) {
        stars.push(
            <FontAwesomeIcon key="half" icon={faStarHalf} style={{ color: "#FFD43B" }} />
        );
    }
    return stars;
};

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
            <div>
                {renderStars(product.rating)}
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