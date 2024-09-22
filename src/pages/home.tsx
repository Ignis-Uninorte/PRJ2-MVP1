import React from 'react';
import MainLayout from '../layouts/MainLayout';
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
        <p>Content section (Main)</p>
        <Banner 
        imageUrl="src\assets\banner_img.gif" 
        altText="Banner"
      />
      </div>
    </MainLayout>
  );
};

export default Home;
