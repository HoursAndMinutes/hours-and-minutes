import FeaturedWatch from "../components/FeaturedWatch";
import ShopDetails from '../components/ShopDetails';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate();
    // const [allWatches, setAllWatches] = useState([]);

    // useEffect(() => {
    //     const fetchAPI = async() => {
    //         const response = await fetch('/api/watches');
    //         const data = await response.json();
    //         const watchList = data;
    //         setAllWatches();
    //     }
    //     fetchAPI();
    // }, []);

    // const getWatches = async () => {
    //     const results = await fetch('/api/watches');
    //     const data = await results.json();
    //     console.log(data)
    // }

    return (
        <body>
            <FeaturedWatch />
            <section>
                <section id="men">
                    <p>Men Watches</p>
                </section>
                <section id="women">
                    <p>Women Watches</p>
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


