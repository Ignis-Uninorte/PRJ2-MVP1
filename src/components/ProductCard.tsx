import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ProductItem } from "../types/plp.type";
import "../styles/productCard.css";

function getDiscountPrice(price: number, discount: number): number {
    return Number((price - (price * discount / 100)).toFixed(2));
}

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
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
    category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product , category }) => {
    const priceDiscount = getDiscountPrice(product.price, product.discount);
    return (
        <Link to={`/product/${category}/${product.id}`} className="product-card"> {/* Mueve el Link para envolver el div */}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="short-description">{product.shortDescription}</p>
            <div className="stars-section-plp">
                {renderStars(product.rating)}
                <p>{product.rating}</p>
            </div>
            <p className="normal-price"><s>${product.price}</s></p>
            <div className="price-discount">
                <p>${priceDiscount}</p>
                <p className="discount">({product.discount}% off)</p>
            </div>
            <button type="button">
                <i className="fa-solid fa-cart-shopping"></i>Add to cart
            </button>
        </Link>
    );
};

export { ProductCard };

