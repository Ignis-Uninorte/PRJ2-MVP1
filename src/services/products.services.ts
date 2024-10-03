import apiManager from './api';
import { ProductsList } from '../types/plp.type'

export function getAllProducts(){
    return apiManager.get('/productsList')
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}


export function getAllProductsByCategory(category: string){
    return apiManager.get('/productsList')
    .then(response => {
        return response.data.filter((listProducts: ProductsList) => listProducts.category === category)
    })
    .catch(error => {
        throw error;
    });
}