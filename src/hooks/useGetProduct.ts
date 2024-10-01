import { useQuery, UseQueryResult} from '@tanstack/react-query';
import { getAllProducts } from '../services/products.services';
import { ProductsList } from '../types/plp.type';


export const useGetProducts = () : UseQueryResult<ProductsList, Error> => {
    return useQuery<ProductsList, Error>({
        queryKey: ['products'], //clave para identificar la consulta
        queryFn: () => getAllProducts(), //función que se ejecuta para obtener los datos
    });
};

