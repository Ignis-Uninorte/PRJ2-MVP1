export type ProductItem = {
    id: number;
    name: string;
    shortDescription: string;
    description: 
        { title: string;
            description: string;
        }[];
    price: number;
    discount: number;
    image: string;
    rating: number;
    specifications: {
        [key: string]: string; // This allows any key with string
    };
}

export type ProductsList = {
    id: number;
    category: string;
    products: ProductItem[];
}[]



