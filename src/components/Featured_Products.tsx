import React from 'react';
import MSIGE78 from '../assets/MSI_Raider_GE78_Intel_Core_i9.jpg';
import MacBookProM1X from '../assets/MacBook Pro M1X.jpg';
import Pc_Gamer_Rgb_Ryzen_5_5600g from '../assets/Pc_Gamer_Rgb_Ryzen_5_5600g.jpg';
import HP_Elite_Folio from '../assets/HP_Elite_Folio.jpg';
import iPad_Pro_2016 from '../assets/iPad Pro 2016.jpg';
import Tablet_LENOVO_M9 from '../assets/Tablet_LENOVO_M9.jpg';
import Tablet_Lenovo_Tab_M10_3era_Gen from '../assets/Tablet_Lenovo_Tab_M10_3era_Gen.jpg';
import Samsung_Galaxy_Tab_S8_Plus from '../assets/Samsung_Galaxy_Tab_S8_Plus.jpg';
import Apple_iPhone_15_Pro_Max from '../assets/Apple_iPhone_15_Pro_Max.jpg';
import Samsung_Galaxy_S24_Ultra from '../assets/Samsung_Galaxy_S24_Ultra.jpg';
import Xiaomi_Redmi_Note_12_Pro from '../assets/Xiaomi_Redmi_Note_12_Pro.jpg';
import Motorola_Moto_G71 from '../assets/Motorola_Moto_G71.jpg';
import '../styles/featuredProducts.css';
import { Link } from 'react-router-dom';


const products = [
  {
    id: 1,
    name: "MSI Raider GE78",
    image: MSIGE78,
    price: 1499,
    discountedPrice: 1199.2,
    discount: 20,
  },
  {
    id: 2,
    name: "MacBook Pro M1X",
    image: MacBookProM1X,
    price: 3999,
    discountedPrice: 3199.2,
    discount: 20,
  },
  {
    id: 3,
    name: "Pc Gamer Rgb Ryzen 5 5600g",
    image: Pc_Gamer_Rgb_Ryzen_5_5600g,
    price: 1000,
    discountedPrice: 600,
    discount: 40,
  },
  {
    id: 4,
    name: "HP Elite Folio",
    image: HP_Elite_Folio,
    price: 866,
    discountedPrice: 779.4,
    discount: 10,
  },
  {
    id: 5,
    name: "iPad Pro 2016",
    image: iPad_Pro_2016,
    price: 179,
    discountedPrice: 170.05,
    discount: 5,
  },
  {
    id: 6,
    name: "Tablet LENOVO M9",
    image: Tablet_LENOVO_M9,
    price: 124,
    discountedPrice: 117.8,
    discount: 5,
  },
  {
    id: 7,
    name: "Tablet Lenovo Tab M10 3th Gen",
    image: Tablet_Lenovo_Tab_M10_3era_Gen,
    price: 139,
    discountedPrice: 125.1,
    discount: 10,
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab S8 Plus",
    image: Samsung_Galaxy_Tab_S8_Plus,
    price: 899.9,
    discountedPrice: 719.99,
    discount: 20,
  },
  {
    id: 9,
    name: "Apple iPhone 15 Pro Max",
    image: Apple_iPhone_15_Pro_Max,
    price: 1199,
    discountedPrice: 959.2,
    discount: 20,
  },
  {
    id: 10,
    name: "Samsung Galaxy S24 Ultra",
    image: Samsung_Galaxy_S24_Ultra,
    price: 1219.99,
    discountedPrice: 975.99,
    discount: 20,
  },
  {
    id: 11,
    name: "Xiaomi Redmi Note 12 Pro",
    image: Xiaomi_Redmi_Note_12_Pro,
    price: 229.50,
    discountedPrice: 218.025,
    discount: 5,
  },
  {
    id: 12,
    name: "Motorola Moto G71",
    image: Motorola_Moto_G71,
    price: 599.99,
    discountedPrice: 479.99,
    discount: 20,
  }
];

const FeaturedProducts: React.FC = () => {

  return (
    <section className="lp-section-2">
      {products.map((product) => (
        <div key={product.id} className="lp-product">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p className="lp-price">Price: ${product.price.toFixed(2)}</p>
          <p className="lp-discounted-price">
            Discounted Price: ${product.discountedPrice.toFixed(2)}{" "}
            <span className="lp-discount">({product.discount}% off)</span>
          </p>
          <button className="lp-button">Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProducts;