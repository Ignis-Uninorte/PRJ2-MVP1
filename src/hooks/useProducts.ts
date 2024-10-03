import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../services/products.services';

export function useAllProducts() {
  return useQuery({
    queryKey: ['products'],  // Pass an object with `queryKey`
    queryFn: getAllProducts  // This is the function that fetches the data
  });
}