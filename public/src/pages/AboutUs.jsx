import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <section>
            <header><NavBar />About Us</header>      
            <section id="aboutus">
                <h2>Welcome To Hours And Minutes</h2>
                <p>
                    Hours And Minutes is a Professional eCommerce-Watch Platform. Here we will provide
                    you only interesting watches, which you will like very much. We're dedicated
                    to providing you the best of service, with a focus on dependability and
                    eCommerce for watches. We're working to turn our passion for eCommerce into
                    a booming online website. We hope you enjoy our eCommerce as much as we enjoy
                    offering them to you.
                </p>
                <p>
                    We will keep updating to ensure our quality is top-notch.
                    Please give your support and love.
                </p>
                <p>
                    Thanks For Visiting Our Site
                    <br />
                    <br />
                    Have a nice day!
                </p>
            </section>
            <footer><Footer /></footer>
        </section>
    )
}

export default AboutUs