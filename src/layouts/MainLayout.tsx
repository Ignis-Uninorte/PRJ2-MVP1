import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Footer from '../components/Footer';
import '../styles/content.css';
import { BrowserRouter } from 'react-router-dom';


interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Header Component */}
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      {/* SubHeader Component */}
      <BrowserRouter>
      <Subheader />
      </BrowserRouter>
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
