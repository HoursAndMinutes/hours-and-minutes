import FeaturedWatch from "../components/FeaturedWatch";
import ShopDetails from '../components/ShopDetails';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Home = () => {

    return (
        <section>
            <FeaturedWatch />
            <section className="gender">
                <section id="men">
                    <a href='/shop?type=men'>
                        <img />
                        <p>Men Watches</p>
                    </a>
                </section>
                <section id="women">
                    <a href='/shop?type=women'>
                        <img />
                        <p>Women's Watches</p>
                    </a>
                </section>
            </section>
            <section className="brands">
                <section id="brand1">
                    <a>
                        <p>Rolex</p>
                    </a>
                </section>
                <section id="brand2">
                    <a>
                        <p>Patek Philippe</p>
                    </a>
                </section>
                <section id="brand3">
                    <a>
                        <p>Jaquet Droz</p>
                    </a>
                </section>
            </section>
            <section className="popular">
                <p>Popular Watches</p>
            </section>
            <ShopDetails />
        </section>
    )
};

export default Home


