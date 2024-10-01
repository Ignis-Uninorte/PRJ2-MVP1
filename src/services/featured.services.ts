import apiManager from './api';

export function getPromotionalImages() {
  return apiManager.get('/featured')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}