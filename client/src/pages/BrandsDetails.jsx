import { useState, useEffect } from 'react';

const BrandsDetails = () => {
  const [allBrands, setAllBrands] = useState([]);


  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetchAPI(`/api/watches`);
      const data = await response.json();
      const brandsData = [];
      data.map((watch) => {
        brandsData.push(watch.brand);
      });
      const brandsList = [...new Set(brandsData)];
      setAllBrands(brandsList);
    };
    fetchAPI();
  })

  console.log(allBrands)

  return (
    <section>
      {
        allBrands.map((brand) => {
          return (
            <section key={`${brand}Id`}>
              <a href={``}>
                <img />
                <p>{brand}</p>
              </a>
            </section>
          )
        })
      }
    </section>
  )
}

export default BrandsDetails;