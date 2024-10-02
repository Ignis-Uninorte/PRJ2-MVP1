import { useQuery, UseQueryResult} from '@tanstack/react-query';
import { getAllProducts } from '../services/products.services';
import { ListOfProductsList } from '../types/plp.type';


export const useGetProducts = () : UseQueryResult<ListOfProductsList, Error> => {
    return useQuery<ListOfProductsList, Error>({
        queryKey: ['productsquery'], //clave para identificar la consulta
        queryFn: () => getAllProducts(), //función que se ejecuta para obtener los datos
    });
};

