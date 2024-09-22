import React from 'react';
import Header from '../components/Header';
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
