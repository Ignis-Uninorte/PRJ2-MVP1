import React from 'react';
import "../styles/plp.css";
import MainLayout from '../layouts/MainLayout';
import bannerImg from '../assets/banner-plp.jpg';

const Plp: React.FC = () =>{
    return (
        <MainLayout>
            <div className="grid-container">
                <nav className="breadcrumb">
                    <p>BREADCRUM</p>
                    {/* Añadir cuando este listo en el otro punto de historia */}
                </nav>
                <section className="information-above">
                    <p>Showing 1-5 of 5 results</p>
                    <div className="orderby">
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
                <section className="content">
                </section>
                <div className="banner">
                    <img src={bannerImg} alt="Banner"></img>
                </div>
            </div>
        </MainLayout>
        );
    };

export default Plp;