import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/breadcrumb.css"
const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const typeOfProduct = location.state?.typeOfProduct; // Access typeOfProduct from state

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      {/* Conditionally render the category if available in location state */}
      {typeOfProduct && (
        <>
          <span> / </span>
          {typeOfProduct}
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;

