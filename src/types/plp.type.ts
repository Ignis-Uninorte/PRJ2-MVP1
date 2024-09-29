export type ProductItem = {
    id: number;
    name: string;
    shortDescription: string;
    description: 
        { title: string;
            content: string;
        }[];
    price: number;
    discount: number;
    image: string;
    rating: number;
    specifications: {
        [key: string]: string; // This allows any key with string
    };
}

export type ProductList = {
    category: string;
    products: ProductItem[];
}[]

export type Product = {
    id: number;
    category: string;
    items: ProductItem[];
}


