import React from 'react';
import MainLayout from '../layouts/MainLayout';
import FeaturedProducts from '../components/Featured_Products';
import Banner from '../components/Banner';
import PromotionalImages from '../components/PromotionalImages'; // Use the new PromotionalImages component
import BI from '../assets/banner_img.gif';
import Breadcrumb from '../components/Breadcrumb';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <Breadcrumb />
      </div>
      <div>
        {/* Dynamic promotional images loaded from API */}
        <PromotionalImages />

        {/* Featured Products and Banner */}
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