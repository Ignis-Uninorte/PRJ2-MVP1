import React from 'react';
import MainLayout from '../layouts/MainLayout';
import FeaturedProducts from '../components/Featured_Products';

import LowerBanner from '../components/LowerBanner';
import PImg from '../components/PImg';
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
        <LowerBanner 
        imageUrl={BI}
        altText="LowerBanner"
      />
      </div>
    </MainLayout>
  );
};

export default Home;