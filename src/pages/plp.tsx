import React, { useState } from 'react';
import "../styles/plp.css";
import MainLayout from '../layouts/MainLayout';
import LowerBanner from '../components/LowerBanner';
import bannerImg from '../assets/banner-plp.jpg';
import { ProductCard } from '../components/ProductCard';
import { filtersData } from '../utils/dataFilter';
import Filter from "../components/Filter";
import Breadcrumb from '../components/Breadcrumb';
import { useAllProducts } from '../hooks/useProducts'; // Import the hook
import Spinner from '../components/Spinner'; // Import spinner component for loading state
import ErrorComponent from '../components/Error'; // Import error component for error state

const Plp: React.FC<{ typeOfProduct: string }> = ({ typeOfProduct }) => {
    const [sortOption, setSortOption] = useState<string>('relevance'); // Add state for sorting
    const { data: products, isLoading, isError } = useAllProducts(); // Use the hook to fetch data

    // Handle loading state
    if (isLoading) {
        return <Spinner />;
    }

    // Handle error state
    if (isError) {
        return <ErrorComponent message="Failed to load products" />;
    }



    // Filter products based on category
    const productCategory = products?.find((product: { category: string }) => product.category === typeOfProduct);
    // Function to sort products based on selected option
    const sortProducts = () => {
        if (!productCategory) return [];
        const sortedItems = [...productCategory.products];
        switch (sortOption) {
            case 'relevance':
                sortedItems.sort((a, b) => b.rating - a.rating);
                break;
            case 'pricel-h':
                sortedItems.sort((a, b) => Number((a.price - (a.price * a.discount / 100)).toFixed(2)) - Number((b.price - (b.price * b.discount / 100)).toFixed(2)));
                break;
            case 'priceh-l':
                sortedItems.sort((a, b) => Number((b.price - (b.price * b.discount / 100)).toFixed(2)) - Number((a.price - (a.price * a.discount / 100)).toFixed(2)));
                break;
            case 'date':
                sortedItems.sort((a, b) => a.id - b.id);
                break;
            default:
                break;
        }
        return sortedItems;
    };

    const sortedItems = sortProducts();
    return (
        <MainLayout>
            <div className="grid-container-plp">
                <nav className="breadcrumb-plp">
                    <Breadcrumb category={typeOfProduct} />
                </nav>
                <section className="information-above-plp">
                    <p>Showing {sortedItems.length} results</p>
                    <div className="orderby-plp">
                        <h4>Order By</h4>
                        <form>
                            <select
                                id="orderby-box"
                                title="SortOption"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)} // Handle sorting option change
                            >
                                <option value="relevance">Relevance</option>
                                <option value="date">Date</option>
                                <option value="pricel-h">Price lower to higher</option>
                                <option value="priceh-l">Price higher to lower</option>
                            </select>
                        </form>
                    </div>
                </section>
                <aside className="filters-plp">
                    <Filter filtersData={filtersData} categoria={typeOfProduct} />
                </aside>
                <section className="content-plp">
                    <ul>
                        {sortedItems.map((item) => (
                            <li className="product" key={item.id}>
                                <ProductCard product={item} />
                            </li>
                        ))}
                    </ul>
                </section>
                <div className="banner-plp">
                <LowerBanner 
                    imageUrl={bannerImg}
                    altText="LowerBanner"
                    />	
                </div>
            </div>
        </MainLayout>
    );
};

export default Plp;

