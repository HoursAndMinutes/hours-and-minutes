import { useState, useEffect } from "react";
import "./ShopDetails.css";

const ShopDetails = ({ type, searchParams }) => {
  //TO DO: Loop through all watches that fit X quality (passed in)
  //EXAMPLE: Loop through all men's watches, women's watches,
  //EXAMPLE: Loop through all Rolex watches
  //TO DO: If no argument/key is passed in, loop through every watch
  //TO DO: Image and watch name take user to singleitem page

  const [allWatches, setAllWatches] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("/api/watches");
      const data = await response.json();
      const watchList = [];
      data.map((watch) => {
        if (
          (watch.gender === "Female" && type === "women") ||
          (watch.gender === "Male" && type === "men") ||
          watch.brand === type
        ) {
          watchList.push(watch);
        } else if (!type) {
          watchList.push(watch);
        }
      });
      setAllWatches(watchList);
    };
    fetchAPI();
  }, [searchParams]);

  return (
    <section className="shop-container">
      {allWatches.map((watch) => {
        return (
          <section key={`#${watch.id}`} className="shop-det">
            <a href={`/singleitem?watchId=${watch.id}`}>
              <img src={`${watch.imageURL}`} />
              <p>{watch.name}</p>
              <p>{`${watch.brand} $${watch.price}`}</p>
            </a>
            <button>Add to Cart</button>
          </section>
        );
      })}
    </section>
  );
  
};

export default ShopDetails;
