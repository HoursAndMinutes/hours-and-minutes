import ShopDetails from "../components/ShopDetails";
import { useSearchParams } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  return (
    <section className="shop">
      <h1>
        {type === "men" ? "Men's" : type === "women" ? "Women's" : `${type}`}{" "}
        Watches
      </h1>
      <div className="watch-container">
        <div id="mens-watch-box" className="watch-box">
          <ShopDetails type={type} searchParams={searchParams} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
