import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm";

const LogIn = () => {
    return (
        <section>
            <header><NavBar /></header>
            <LogInForm />
            <p>New User? Sign Up <a>Here!</a></p>
            <footer><Footer /></footer>
        </section>
    )
};

export default LogIn