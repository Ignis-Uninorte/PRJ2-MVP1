import React from 'react';
import '../styles/pimg.css';

interface PImgProps {
  key: number;
  imageUrl: string;
  altText: string;
}

const PImg: React.FC<PImgProps> = ({ imageUrl, altText }) => {
  return (
    <div className="pimg-container">
      <img src={imageUrl} alt={altText} className="pimg-image" />
    </div>
  );
};

export default PImg;