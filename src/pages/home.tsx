import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Banner from '../components/Banner';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
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
