import ShopDetails from '../components/ShopDetails';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Shop = () => {
    const [allWatches, setAllWatches] = useState([]);
    const [searchParams] = useSearchParams();

    const type = searchParams.get('type');

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch(`/api/watches`);
            const data = await response.json();
            setAllWatches(data);
        };
        fetchAPI();
    }, []);

    return (
        <section>
            <h1>All {
                type === 'men' ? "Men's" : type === 'women' ? "Women's" : "brand"
            } Watches</h1>
            <ShopDetails type={type} />
        </section>
    )
};

export default Shop