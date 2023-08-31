import FeaturedWatch from "../components/FeaturedWatch";
import ShopDetails from '../components/ShopDetails';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    return (
        <body>
            <FeaturedWatch />
            <section>
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
            <section>
                <section id="brand1">
                    <p>Brand 1 Watches</p>
                </section>
                <section id="brand2">
                    <p>Brand 2 Watches</p>
                </section>
                <section id="brand3">
                    <p>Brand 3 Watches</p>
                </section>
            </section>
            <section>
                <p>Popular Watches</p>
            </section>
            <ShopDetails />
        </body>
    )
};

export default Home


