// src/pages/Home.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import FeaturedProducts from '../components/Featured_Products';
import Banner from '../components/Banner';
import PImg from '../components/PImg';
import BI from '../assets/banner_img.gif';
import PI1 from '../assets/Discounted_product1.jpg';
import PI2 from '../assets/Discounted_product2.jpg';
import Breadcrumb from '../components/Breadcrumb';


const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
<Breadcrumb/>
      </div>
      <div>
      <PImg 
        imageUrl={PI1}
        altText="Discount Image 1"
      />
      <PImg 
        imageUrl={PI2} 
        altText="Discount Image 2"
      />
        <FeaturedProducts />
        <Banner 
        imageUrl={BI}
        altText="Banner"
      />
      </div>
    </MainLayout>
  );
};

export default Home;
