import FeaturedWatch from "../components/FeaturedWatch";
import ShopDetails from '../components/ShopDetails';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import BrandsDetails from "./BrandsDetails";

const Home = () => {

    return (
        <section>
            <section className="title">Time...it's not just relative.</section>
            <FeaturedWatch />
            <BrandsDetails />
            {/* <section className="brands">
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
            </section> */}
            <section className="popular">
                <p>Popular Watches</p>
            </section>
            <section className="gender">
                <section id="men">
                    <a href='/shop?type=men'>
                        <img src="https://manofmany.com/wp-content/uploads/2019/10/James-Bond-Watch-Goldeneye-Omega-Seamaster-Professional-300M-Ref.-2541.80.jpg" />
                        <p>Men Watches</p>
                    </a>
                </section>
                <section id="women">
                    <a href='/shop?type=women'>
                        <img src="data:image/jpeg;base64,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" />
                        <p>Women's Watches</p>
                    </a>
                </section>
            </section>
            <ShopDetails />
        </section>
    )
};

export default Home


