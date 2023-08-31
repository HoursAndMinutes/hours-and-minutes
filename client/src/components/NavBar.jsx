import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = ({setToken}) => {
    const navigate = useNavigate()
  return (
    <header>
      <nav>
        <Link className="navLink" to="/">
          {" "}
          Hours and Minutes{" "}
        </Link>
        <Link className="navLink" to="/shop?type=men">
          {" "}
          Men's{" "}
        </Link>
        <Link className="navLink" to="/shop?type=women">
          {" "}
          Women's{" "}
        </Link>
        <Link className="navLink" to="/shop?type=brand">
          {" "}
          Shop by Brand{" "}
        </Link>
        <Link className="navLink" to="/shop?type=featured">
          {" "}
          Featured{" "}
        </Link>
        <Link className="navLink" to="/profile">
          {" "}
          Profile{" "}
        </Link>
        {/* <Link className="navLink" to="/login" state={{token : token}}>
          {" "}
          Login{" "}
        </Link> */}
        <Link className="navLink" to="/cart">
          {" "}
          Cart{" "}
        </Link>

        <Link className="navLink"  onClick={() => {localStorage.removeItem("logintoken")
        setToken("")
        navigate('/')}}>
          {" "}
          Sign Out{" "}
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
