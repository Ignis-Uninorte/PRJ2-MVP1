import React from 'react';
import PImg from './PImg'; // Import your image component
import { usePromotionalImages } from '../hooks/usePromotionalImages'; // Import your custom hook
import Spinner from './Spinner'; // Assuming you have a spinner component for loading state
import ErrorComponent from './Error'; // Assuming you have an error component

const PromotionalImages: React.FC = () => {
  const { data, isLoading, isError } = usePromotionalImages(); // Fetch promotional images

  if (isLoading) {
    return <Spinner />; // Show loading spinner while fetching data
  }

  if (isError) {
    return <ErrorComponent message={'Error loading images.'} />; // Show error component if fetching failed
  }

  return (
    <div className="promotional-images">
      {data.map((promo: { id: number, imageUrl: string, altText: string }) => (
        <PImg key={promo.id} imageUrl={promo.imageUrl} altText={promo.altText} />
      ))}
    </div>
  );
};

export default PromotionalImages;
