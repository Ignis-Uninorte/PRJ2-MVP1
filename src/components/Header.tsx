import React from 'react';
import '../styles/header.css';
import '../styles/subheader.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="src\assets\Ignis_Store_Logo.png" alt="Company Logo" />
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
          <a className="account-link" href="/account">
            <img src="src/assets/account-icon.svg" alt="My Account" />
            <span>My Account</span>
          </a>
          <div className="divider"></div>
          <a className="cart-link" href="/cart">
            <img src="src/assets/cart-icon.svg" alt="Cart" />
            <span>My Cart</span>
          </a>
        </div>
      </div>
      {/* Subheader */}
      <div className="subheader">
        <h2>Subheader</h2>
      </div>      
    </header>
    
  );
  
};

export default Header;
