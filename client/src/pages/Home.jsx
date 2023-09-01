import FeaturedWatch from "../components/FeaturedWatch";
import ShopDetails from '../components/ShopDetails';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    return (
        <section>
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
                    <a>
                        <p>Brand 1 Watches</p>
                    </a>
                </section>
                <section id="brand2">
                    <a>
                        <p>Brand 2 Watches</p>
                    </a>
                </section>
                <section id="brand3">
                    <a>
                        <p>Brand 3 Watches</p>
                    </a>
                </section>
            </section>
            <section>
                <p>Popular Watches</p>
            </section>
            <ShopDetails />
        </section>
    )
};

export default Home


