import { Link } from "react-router-dom"

const Footer = () => {
  return (
      <footer>
        <nav>
          <Link className = "navLink" to = '/about'> About Us </Link>
          <Link className = "navLink" to = '/contact'> Contact Us </Link>
          <Link className = "navLink" to = '/profile'> Profile </Link>
        </nav>    
      </footer>
  )
}

export default Footer;