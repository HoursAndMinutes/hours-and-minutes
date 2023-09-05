import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="nav">
      <nav className="nav">
        <Link className="navLink" to="/about">About Us</Link>
        <Link className="navLink" to="/contact">Contact Us</Link>
        <Link className="navLink" to="/profile">Profile</Link>
      </nav>
    </footer>
  );
};

export default Footer;
