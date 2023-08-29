import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckoutForm from "../components/CheckoutForm"
const Checkout = () => {
    return (
        <section>
            <header><NavBar /></header>
            <section id="saveInfo">
                <p>Login or Sign Up to save info for future purchases</p>
            </section>
            <CheckoutForm />
            <footer><Footer /></footer>
        </section>
    )
};

export default Checkout