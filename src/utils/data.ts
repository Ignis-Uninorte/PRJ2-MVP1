import {Product} from "../pages/Plp"

export const products: Product[] = [
    {
        id: 1,
        category: "Computers",
        items: [
            {
                id: 1,
                name: "Samsung Galaxy Tab S9 FE+ Plus 12.4” 128GB Android Tablet",
                description: "New tablet Samsung with 128 GB. Display Size of 12.4 Inches",
                price: 599.99,
                discount: 20,
                image: "../assets/products/tablets/samsung.jpg",
                rating: 5,
                especifications: {
                    brand: "Samsung",
                    condition: "New",
                    memoryStorage: "128 GB",
                    displaySize: "12'4 Inches",
                    color: "Black",
                }
            },
            {
                id: 2,
                name: "SAMSUNG Galaxy Tab A9+ Plus 11” 64GB Android Tablet",
                description: "Renew tablet Samsung with 64 GB. Display Size of 11 Inches",
                price: 150.99,
                discount: 20,
                image: "../assets/products/tablets/rp1.jpg",
                rating: 4.5,
                especifications: {
                    brand: "Samsung",
                    condition: "Renew",
                    memoryStorage: "64 GB",
                    displaySize: "11 Inches",
                    color: "Black",
                }
            },
            {
                id: 3,
                name: "Android Tablet",
                description: "Used Android tablet with 16GB. Display Size of 11 Inches",
                price: 89.99,
                discount: 10,
                image: "../assets/products/tablets/rp2.jpg",
                rating: 2,
                especifications: {
                    brand: "Generic",
                    condition: "Used",
                    memoryStorage: "16 GB",
                    displaySize: "11 Inches",
                    color: "Gray",
                }
            },
            {
                id: 4,
                name: "Amazon Fire HD 10 tablet",
                description: "Used Android tablet with 8GB. Display Size of 10 Inches",
                price: 289.99,
                discount: 35,
                image: "../assets/products/tablets/rp3.jpg",
                rating: 4.2,
                especifications: {
                    brand: "Amazon",
                    condition: "Used",
                    memoryStorage: "8 GB",
                    displaySize: "10 Inches",
                    color: "Gray",
                }
            },
            {
                id: 5,
                name: "Lenovo Tab M9",
                description: "New Lenovo tab M9 with 64GB. Display Size of 9 Inches",
                price: 189.99,
                discount: 58,
                image: "../assets/products/tablets/rp4.jpg",
                rating: 4,
                especifications: {
                    brand: "Lenovo",
                    condition: "New",
                    memoryStorage: "64 GB",
                    displaySize: "9 Inches",
                    color: "Gray",
                }
            }
        ]
    }
];
