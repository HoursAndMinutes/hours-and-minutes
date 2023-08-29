import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PurchaseHistory from "../components/PurchaseHistory";

const Profile = () => {
    return (
        <section>
            <header><NavBar /></header>
            <PurchaseHistory />
            <footer><Footer /></footer>
        </section>
    )
};

export default Profile