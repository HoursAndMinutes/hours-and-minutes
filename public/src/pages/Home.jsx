import FeaturedWatch from "../components/FeaturedWatch";
import ShopDetails from '../components/ShopDetails';

const Home = () => {
    return (
        <section>
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
        </section>
    )
};

export default Home


