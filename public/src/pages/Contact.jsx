import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <section>
            <header><NavBar /></header>
                <section id="contactinfo">
                    <p>Address</p>
                    <p>Email</p>
                    <p>Etc.</p>
                </section>
            <ContactForm />
            <footer><Footer /></footer>
        </section>
    )
};

export default Contact