import apiManager from './api';

export function getPromotionalImages() {
  return apiManager.get('/promotional')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}