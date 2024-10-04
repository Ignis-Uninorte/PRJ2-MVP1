import { useQuery } from '@tanstack/react-query';
import { getFilters } from '../services/filters.services';  // Import the service

export function useFilters() {
  return useQuery({
    queryKey: ['filters'],  // Unique key for the filters query
    queryFn: getFilters,    // The service function that fetches the filters data
  });
}