import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import '../styles/header.css';
import CompanyLogo from '../assets/ignis_store_logo.png';
import SearchIcon from '../assets/search_icon.svg';	
import AccountIcon from '../assets/account-icon.svg';
import CartIcon from '../assets/cart-icon.svg';


const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={CompanyLogo} alt="Company Logo" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">
            <img src={SearchIcon} alt="Search" />
          </button>
        </div>

        {/* Account and Cart Links */}
        <div className="account-cart">
          <a className="account-link" href="">
            <img src={AccountIcon} alt="My Account" />
            <span>My Account</span>
          </a>
          <div className="divider"></div>
          <a className="cart-link" href="">
            <img src={CartIcon} alt="Cart" />
            <span>My Cart</span>
          </a>
        </div>
      </div>     
    </header>
    
  );
  
};

export default Header;
