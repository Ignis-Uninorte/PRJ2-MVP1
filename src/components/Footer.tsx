import React from 'react';
import '../styles/footer.css';
import facebook from'../assets/facebook-logo.svg';
import twitter from'../assets/twitter-logo.svg';
import instagram from'../assets/instagram-logo.svg';
import visa from'../assets/visa-logo.svg';
import mastercard from'../assets/mastercard-logo.svg';
import paypal from'../assets/paypal-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <p>Social reason: Ignis & Associates</p>
          <p>NIT: 890.900.943-1</p>
        </div>
        <div className="footer-center">
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
        </div>
        <div className="footer-right">
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={paypal} alt="PayPal" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-column">
          <h3 className="footer-title">Our Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Stores</a></li>
            <li><a href="#">Our Brands</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Credit Card</a></li>
            <li><a href="#">Tax Certificates</a></li>
            <li><a href="#">Raffles</a></li>
            <li><a href="#">Employee and Cooperative Fund</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Online Shopping</h3>
          <ul>
            <li><a href="index.html">Main Page</a></li>
            <li><a href="plp.html">Product List</a></li>
            <li><a href="pdp.html">Product Description</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Secure Payment</a></li>
            <li><a href="#">Shipping Methods</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Policies</h3>
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Online Sales Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Personal Data Processing</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Return and Exchange Policy</a></li>
            <li><a href="#">Code of Ethics</a></li>
            <li><a href="#">SST Standards Manual for Third Parties</a></li>
            <li><a href="#">Ethics Line</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
