export type ProductItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    rating: number;
    specifications: {
        brand: string;
        condition: string;
        memoryStorage: string;
        displaySize: string;
        color: string;
    }
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


