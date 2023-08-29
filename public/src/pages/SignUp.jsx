import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";

const SignUp = () => {
    return (
        <section>
            <header><NavBar /></header>
            <RegisterForm />
            <p>Already an existing User? Login <a>Here!</a></p>
            <footer><Footer /></footer>
        </section>
    )
};

export default SignUp