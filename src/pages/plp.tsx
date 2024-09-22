// src/pages/PLP.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const PLP: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <h1>{location.pathname.split('/').pop()?.toUpperCase()}</h1>
      {/* lo de arriba es pa decir en qué estoy parada */}
    </div>
  );
};

export default PLP;
