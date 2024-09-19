import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  // Dividir la ruta en segmentos
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="breadcrumb-plp" aria-label="breadcrumb">
      <ol>
        <li>}
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to}>
              <span> &gt; </span>
              <Link to={to}>{value.replace('-', ' ')}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
