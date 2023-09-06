import { useState, useEffect } from 'react';

const PurchaseHistory = () => {
  //TO DO: Connect to backend
  //TO DO: Loop through
  const [history, setHistory] = useState([]);

  const getPurchaseHistory = async (userId) => {
    const results = await fetch(`/api/users/${userId}/purchasehistory`);
    const data = await results.json();
    return data
  }

  useEffect(() => {
      getPurchaseHistory(1).then(data => setHistory(data));
  }, []);

  return (

        <section>
            <h2>Purchase History</h2>
            {history.map(item => (
                    <section key={item.id}>
                        <p>Name: {item.watch.name}</p>
                        <p>Price: ${item.watch.price}</p>
                        <p>Purchase Date: {new Date(item.purchase_date).toLocaleDateString()}</p>
                        <br></br>
                    </section>
                ))
            }
        </section> 
  )
}

export default PurchaseHistory;