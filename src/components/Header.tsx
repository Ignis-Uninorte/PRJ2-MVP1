import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import '../styles/header.css';


const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="src\assets\Ignis_Store_Logo.png" alt="Company Logo" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">
            <img src="src/assets/search_icon.svg" alt="Search" />
          </button>
        </div>

        {/* Account and Cart Links */}
        <div className="account-cart">
          <a className="account-link" href="">
            <img src="src/assets/account-icon.svg" alt="My Account" />
            <span>My Account</span>
          </a>
          <div className="divider"></div>
          <a className="cart-link" href="">
            <img src="src/assets/cart-icon.svg" alt="Cart" />
            <span>My Cart</span>
          </a>
        </div>
      </div>     
    </header>
    
  );
  
};

export default Header;
