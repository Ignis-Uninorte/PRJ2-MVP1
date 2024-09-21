import React from 'react';
import "../styles/plp.css";
import MainLayout from '../layouts/MainLayout';
import bannerImg from '../assets/banner-plp.jpg';
import {products} from '../utils/data';
import { ProductCard } from '../components/ProductCard';


const Plp: React.FC<{typeOfProduct : string}> = ({typeOfProduct}) =>{
    const productCategory = products.find(product => product.category === typeOfProduct);
    return (
        <MainLayout>
            <div className="grid-container-plp">
                <nav className="breadcrumb">
                    <p>BREADCRUM</p>
                    {/* Añadir cuando este listo en el otro punto de historia */}
                </nav>
                <section className="information-above-plp">
                    <p>Showing 1-5 of 5 results</p>
                    <div className="orderby-plp">
                        <h4>Order By</h4>
                        <form>
                            {/* Añadir funcionalidad */}
                            <select id="orderby-box">
                                <option value="relevance">Relevance</option>
                                <option value="date">Date</option>
                                <option value="pricel-h">Price lower to higher</option> 
                                <option value="priceh-l">Price higher to lower</option>
                            </select>
                        </form>
                    </div>
                </section> 
                <aside className="filters">
                    <h2>Filters</h2>
                    {/* Añadir cuando este listo en el otro punto de historia */}
                </aside>
                <section className="content-plp">
                    <ul>
                        {
                            productCategory?.items.map(item => <li className="product" key={item.id}><ProductCard product={item} /></li>)
                        }
                    </ul>
                </section>
                <div className="banner-plp">
                    <img src={bannerImg} alt="Banner" />
                </div>
            </div>
        </MainLayout>
        );
};

export default Plp;