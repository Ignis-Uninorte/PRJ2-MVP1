import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProducts from '../pages/Featured_Products';
import '../styles/content.css';


interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="content">
        {children}
        <FeaturedProducts />
      </main>
       
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default MainLayout;
