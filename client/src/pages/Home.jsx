import FeaturedWatch from "../components/FeaturedWatch";
import ShopDetails from '../components/ShopDetails';

const Home = () => {

    const getWatches = async () => {
        const results = await fetch('/api/watches');
        const data = await results.json();
        console.log(data)
    }

    return (
        <body>
            <FeaturedWatch />
            <section id="men">
                <h1>Men Watches</h1>
            </section>
            <section id="women">
                <h1>Women Watches</h1>
            </section>
            <section id="brand1">
                <h1>Brand 1 Watches</h1>
            </section>
            <section id="brand2">
                <h1>Brand 2 Watches</h1>
            </section>
            <section id="brand3">
                <h1>Brand 3 Watches</h1>
            </section>
            <ShopDetails />
        </body>
    )
};

export default Home


