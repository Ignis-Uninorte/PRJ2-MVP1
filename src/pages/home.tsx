import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import FeaturedProducts from '../components/Featured_Products';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <p>Content section (Main)</p>
      </div>
      <BrowserRouter>
        <FeaturedProducts />
      </BrowserRouter> 
    </MainLayout>
  );
};

export default Home;
