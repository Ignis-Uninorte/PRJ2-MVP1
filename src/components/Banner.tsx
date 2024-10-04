import React from 'react';
import '../styles/banner.css';

interface BannerProps {
  imageUrl: string;
  altText: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText }) => {
  return (
    <div className="banner-container">
      <img src={imageUrl} alt={altText} className="banner-image" />
    </div>
  );
};

export default Banner;