import apiManager from './api';

export function getAllProducts(){
    return apiManager.get('/productsList')
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

