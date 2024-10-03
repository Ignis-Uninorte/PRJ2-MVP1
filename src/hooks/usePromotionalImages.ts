import { useQuery } from '@tanstack/react-query';
import { getPromotionalImages } from '../services/promotional.services';

export function usePromotionalImages() {
  return useQuery({
    queryKey: ['promotionalImages'],  // Pass an object with `queryKey`
    queryFn: getPromotionalImages     // This is the function that fetches the data
  });
}
