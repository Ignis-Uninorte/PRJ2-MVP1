import React from 'react';
import '../styles/header.css';
import '../styles/subheader.css';

const Header: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Header</h1>
      </header>

      {/* Subheader */}
      <div className="subheader">
        <h2>Subheader</h2>
      </div>
    </div>
  );
};

export default Header;
