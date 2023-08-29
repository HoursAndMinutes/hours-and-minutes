import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SingleItemDetail from "../components/SingleItemDetail";

const SingleItem = () => {
    return (
        <section>
            <header><NavBar /></header>
            <SingleItemDetail />
            <footer><Footer /></footer>
        </section>
    )
};

export default SingleItem