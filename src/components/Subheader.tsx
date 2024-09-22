import React, { useState } from 'react';
import '../styles/subheader.css'; // Import your CSS file

// Example array of categories and subcategories
const categories = [
  {
    name: 'Technology',
    subcategories: [
      { name: 'Computers', url: '/plp-technology/computers' },
      { name: 'Televisions', url: '/plp-technology/televisions' },
      { name: 'Audio', url: '/plp-technology/audio' },
      { name: 'Video', url: '/plp-technology/video' },
      { name: 'Printing', url: '/plp-technology/printing' },
      { name: 'Cameras', url: '/plp-technology/cameras' }
    ]
  },
  {
    name: 'Appliances',
    subcategories: [
      { name: 'Air Conditioning', url: '/plp-appliances/air-conditioning' },
      { name: 'Refrigeration', url: '/plp-appliances/refrigeration' },
      { name: 'Washers/Dryers', url: '/plp-appliances/washers-dryers' }
    ]
  },
  {
    name: 'Mobile Devices',
    subcategories: [
      { name: 'Phones', url: '/plp-mobile-devices/phones' },
      { name: 'Tablets', url: '/plp-mobile-devices/tablets' },
      { name: 'Smartwatches', url: '/plp-mobile-devices/smartwatches' }
    ]
  },
  {
    name: 'Home',
    subcategories: [
      { name: 'Living Room', url: '/plp-home/living-room' },
      { name: 'Dining Room', url: '/plp-home/dining-room' },
      { name: 'Kitchen', url: '/plp-home/kitchen' },
      { name: 'Bathroom', url: '/plp-home/bathroom' }
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
                  <a href={sub.url}>{sub.name}</a>
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
