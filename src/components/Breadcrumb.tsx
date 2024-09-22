// src/components/Breadcrumb.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    'technology': 'Technology',
    'appliances': 'Appliances',
    'mobile-devices': 'Mobile Devices',
    'phones': 'Phones',
    'tablets': 'Tablets',
    'smartwatches': 'Smartwatches',
    'air-conditioning': 'Air Conditioning',
    'refrigeration': 'Refrigeration',
    'washers-dryers': 'Washers/Dryers',
    'computers': 'Computers',
    'televisions': 'Televisions',
    'audio': 'Audio',
    'video': 'Video',
    'printing': 'Printing',
    'cameras': 'Cameras',
    'home': 'Home',
    'living-room': 'Living Room',
    'dining-room': 'Dining Room',
    'kitchen': 'Kitchen',
    'bathroom': 'Bathroom'
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>{breadcrumbNameMap[value] || value}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;


