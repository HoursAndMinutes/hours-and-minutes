import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckOutButton from "../components/CheckoutButton";
import CartDetails from "../components/CartDetails";

const Cart = () => {
    return (
        <section>
            <header><NavBar />Cart</header>
            <CartDetails />
            <CheckOutButton />
            <footer><Footer /></footer>
        </section>
    )
};

export default Cart