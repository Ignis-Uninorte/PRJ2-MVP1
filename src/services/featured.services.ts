import apiManager from './api';

export function getFeaturedProducts() {
  return apiManager.get('/featured')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}