import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../styles/subheader.css'; // Import your CSS file

// Example array of categories and subcategories
const categories = [
  {
    name: 'Technology',
    subcategories: [
      { name: 'Computers', type: 'Computers' }, // type is passed as a prop
      { name: 'Televisions', type: 'Televisions' },
      { name: 'Audio', type: 'Audio' },
      { name: 'Video', type: 'Video' },
      { name: 'Printing', type: 'Printing' },
      { name: 'Cameras', type: 'Cameras' }
    ]
  },
  {
    name: 'Appliances',
    subcategories: [
      { name: 'Air Conditioning', type: 'Air Conditioning' },
      { name: 'Refrigeration', type: 'Refrigerators' },
      { name: 'Washers/Dryers', type: 'Washers/Dryers' }
    ]
  },
  {
    name: 'Mobile Devices',
    subcategories: [
      { name: 'Phones', type: 'Phones' },
      { name: 'Tablets', type: 'Tablets' },
      { name: 'Smartwatches', type: 'Smartwatches' }
    ]
  },
  {
    name: 'Home',
    subcategories: [
      { name: 'Living Room', type: 'Living Room' },
      { name: 'Dining Room', type: 'Dining Room' },
      { name: 'Kitchen', type: 'Kitchen' },
      { name: 'Bathroom', type: 'Bathroom' }
    ]
  }
];

const Subheader: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle submenu for mobile
  const toggleSubmenu = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active submenu
  };

  return (
    <nav className="subheader">
      <ul className="menu">
        {categories.map((category, index) => (
          <li
            className={`menu-item ${activeIndex === index ? 'active' : ''}`} // Conditionally apply active class
            key={category.name}
            onClick={() => toggleSubmenu(index)} // Toggle submenu on click
            onMouseEnter={() => setActiveIndex(index)} // Hover for desktop
            onMouseLeave={() => setActiveIndex(null)} // Close on hover out for desktop
          >
            <span className="category-name">{category.name}</span>
            <ul className={`submenu ${activeIndex === index ? 'open' : ''}`}>
              {category.subcategories.map((sub) => (
                <li key={sub.name}>
                  {/* Use Link to navigate to the main PLP and pass the type via state */}
                  <Link to="/plp" state={{ typeOfProduct: sub.type }}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Subheader;
