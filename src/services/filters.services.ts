import apiManager from './api';

export function getFilters() {
  return apiManager.get('/filters')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
