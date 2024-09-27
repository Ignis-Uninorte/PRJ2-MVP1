import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import "../styles/breadcrumb.css";

interface BreadcrumbProps {
  category?: string;
  productName?: string;
  isShoppingCart?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category, productName, isShoppingCart }) => {
  const { typeOfProduct } = useParams<{ typeOfProduct: string }>(); 
  const location = useLocation(); 

  const renderShoppingCartBreadcrumb = () => (
    <>
      <Link to="/">Home</Link>
      <span className="breadcrumb-separator"> / </span>
      <span>ShoppingCart</span> 
    </>
  );

  const renderPLPBreadcrumb = () => (
    <>
      <Link to="/">Home</Link>
      {category || typeOfProduct ? (
        <>
          <span className="breadcrumb-separator"> / </span>
          <Link to={`/plp/${category || typeOfProduct}`}>
            {category || typeOfProduct}
          </Link>
        </>
      ) : null}
    </>
  );

  const renderPDPBreadcrumb = () => (
    <>
      <Link to="/">Home</Link>
      {category || typeOfProduct ? (
        <>
          <span className="breadcrumb-separator"> / </span>
          <Link to={`/plp/${category || typeOfProduct}`}>
            {category || typeOfProduct}
          </Link>
        </>
      ) : null}
      {productName && (
        <>
          <span className="breadcrumb-separator"> / </span>
          <span>{productName}</span> 
        </>
      )}
    </>
  );

  
  if (isShoppingCart) {
    return <nav className="breadcrumb">{renderShoppingCartBreadcrumb()}</nav>;
  }

  if (location.pathname.includes('/product/')) {
    
    return <nav className="breadcrumb">{renderPDPBreadcrumb()}</nav>;
  }

  return <nav className="breadcrumb">{renderPLPBreadcrumb()}</nav>;
};

export default Breadcrumb;
