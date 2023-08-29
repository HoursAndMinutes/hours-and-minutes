import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import FeaturedWatch from "../components/FeaturedWatch";

const Home = () => {
    return (
        <section>
            <header><NavBar />Home Page</header>
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
                <p>All Watches Component Belongs Here</p>
            </body>
            <footer><Footer /></footer>
        </section>
    )
};

export default Home


