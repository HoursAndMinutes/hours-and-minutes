import { useState, useEffect } from 'react';

const BrandsDetails = () => {
  const [allBrands, setAllBrands] = useState([]);

  const thirdArr = [];

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(`/api/watches`);
      const data = await response.json();
      const brandsData = [];
      data.map((watch) => {
        brandsData.push(watch.brand);
      });
      // const brandsList = [...new Set(brandsData)];
      setAllBrands(brandsData);
    };
    fetchAPI();
  }, [])

  return (
    <section>
      {
        allBrands.map((brand) => {
          if (!thirdArr.includes(brand)) {
            thirdArr.push(brand);
            return (
              <section key={`${brand}Id`}>
                <a href={`/shop?type=${brand}`}>
                  <img />
                  <p>{brand}</p>
                </a>
              </section>
            )
          }
        })
      }
    </section>
  )
}

export default BrandsDetails;