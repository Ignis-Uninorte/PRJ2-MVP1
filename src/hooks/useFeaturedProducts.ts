import { useQuery } from '@tanstack/react-query';
import { getFeaturedProducts } from '../services/featured.services';

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ['FeaturedProducts'],  // Pass an object with `queryKey`
    queryFn: getFeaturedProducts     // This is the function that fetches the data
  });
}