import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ setToken, token }) => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <Link className="navLink" to="/">H&M</Link>
          <Link className="navLink" to="/shop?type=men">Men</Link>
          <Link className="navLink" to="/shop?type=women">Women</Link>
          <Link className="navLink" to="/shop?type=brand">Brand</Link>
          <Link className="navLink" to="/shop?type=featured">Featured</Link>
        </div>
        <div className="nav-center">
        <Link className="navLink center-logo" to="/">H&M</Link>
        </div>
        <div className="nav-right">
          <Link className="navLink" to="/cart">Cart</Link>
          {token ? (
            <>
              <Link className="navLink" to="/profile">Profile</Link>
              <Link
                className="navLink"
                to="/"
                onClick={() => {
                  localStorage.removeItem("logintoken");
                  setToken("");
                }}
              >
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="navLink" to="/login" state={{ token: token }}>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
