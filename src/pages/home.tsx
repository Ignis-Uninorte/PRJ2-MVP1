import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import FeaturedProducts from '../components/Featured_Products';
import Banner from '../components/Banner';
import PImg from '../components/PImg';


const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
      <PImg 
        imageUrl="src\assets\Discounted_product1.jpg" 
        altText="Discount Image 1"
      />
      <PImg 
        imageUrl="src\assets\Discounted_product2.jpg" 
        altText="Discount Image 2"
      />
      <BrowserRouter>
        <FeaturedProducts />
      </BrowserRouter> 
        <Banner 
        imageUrl="src\assets\banner_img.gif" 
        altText="Banner"
      />
      </div>
    </MainLayout>
  );
};

export default Home;
