// import { useQuery, UseQueryResult} from '@tanstack/react-query';
// import { getAllProductsByCategory } from '../services/products.services';
// import { ProductsList } from '../types/plp.type';


// export const useGetProducts = (category: string) : UseQueryResult<ProductsList, Error> => {
//     const url = "products/" + category
//     return useQuery<ProductsList, Error>({
//         queryKey: [url], //clave para identificar la consulta
//         queryFn: () => getAllProductsByCategory(getCategoryId(category)), //función que se ejecuta para obtener los datos
//     });
// };
