import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import "../styles/breadcrumb.css";

interface BreadcrumbProps {
  category?: string;
  productName?: string;
  isShoppingCart?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category, productName, isShoppingCart }) => {
  const { typeOfProduct } = useParams<{ typeOfProduct: string }>(); // Extract typeOfProduct from URL if available
  const location = useLocation(); // Access current location for dynamic breadcrumb rendering

  const renderShoppingCartBreadcrumb = () => (
    <>
      <Link to="/">Home</Link>
      <span className="breadcrumb-separator"> / </span>
      <span>ShoppingCart</span> {/* No link for current page */}
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
          <span>{productName}</span> {/* Current page */}
        </>
      )}
    </>
  );

  // Determine the breadcrumb structure based on the current page
  if (isShoppingCart) {
    return <nav className="breadcrumb">{renderShoppingCartBreadcrumb()}</nav>;
  }

  if (location.pathname.includes('/product/')) {
    // PDP page
    return <nav className="breadcrumb">{renderPDPBreadcrumb()}</nav>;
  }

  // Default to PLP or home page (Home only or Home / Category)
  return <nav className="breadcrumb">{renderPLPBreadcrumb()}</nav>;
};

export default Breadcrumb;
