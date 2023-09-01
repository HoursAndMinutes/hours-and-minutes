import { Link } from "react-router-dom";

const NavBar = ({setToken, token}) => {
  return (
    <header>
      <nav>
        <Link className="navLink" to="/">
          {" "}
          H&M{" "}
        </Link>
        <Link className="navLink" to="/shop?type=men">
          {" "}
          Men{" "}
        </Link>
        <Link className="navLink" to="/shop?type=women">
          {" "}
          Women{" "}
        </Link>
        <Link className="navLink" to="/brands">
          {" "}
          Shop by Brand{" "}
        </Link>
        <Link className="navLink" to="/shop?type=featured">
          {" "}
          Featured{" "}
        </Link>
        <Link className="navLink" to="/cart">
          {" "}
          Cart{" "}
        </Link>
        {token ? (
          <div>
            <Link className="navLink" to="/profile">
              {" "}
              Profile{" "}
            </Link>
            <Link
              className="navLink"
              to="/"
              onClick={() => {
                localStorage.removeItem("logintoken");
                setToken("");
              }}
            >
              {" "}
              Sign Out{" "}
            </Link>
          </div>
        ) : (
            <Link className="navLink" to="/login" state={{ token: token }}>
              {" "}
              Login{" "}
            </Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
