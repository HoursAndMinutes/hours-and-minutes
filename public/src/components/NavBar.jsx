import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <section>
            <nav>
                <Link className = "navLink" to = '/'> Hours and Minutes </Link>
                <Link className = "navLink" to = '/shop?type=men'> Men's </Link>
                <Link className = "navLink" to = '/shop?type=women'> Women's </Link>
                <Link className = "navLink" to = '/shop?type=brand'> Shop by Brand </Link>
                <Link className = "navLink" to = '/shop?type=featured'> Featured </Link>
            </nav>        
        </section>
    )
}

export default NavBar