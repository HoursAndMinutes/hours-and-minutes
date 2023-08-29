import { Link } from "react-router-dom"

const Footer = () => {
  return (
      <section>
        <nav>
          <Link className = "navLink" to = '/about'> About Us </Link>
          <Link className = "navLink" to = '/contact'> Contact Us </Link>
          <Link className = "navLink" to = '/profile'> Profile </Link>
        </nav>    
      </section>
  )
}

export default Footer;