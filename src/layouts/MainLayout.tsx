import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Footer from '../components/Footer';
import '../styles/content.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (

    <div className="layout-container">
      {/* Header Component */}
      <Header />
      {/* SubHeader Component */}
      <Subheader />
      {/* Main Content */}
      <main className="content">
        {children}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default MainLayout;
