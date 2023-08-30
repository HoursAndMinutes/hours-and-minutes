const PurchaseHistory = ({user}) => {

  if(!user){
    userId = 2;
    
  }
  //TO DO: Connect to backend
  //TO DO: Loop through
  return (
      <section>
        <h2>Purchase History</h2>
        <p>(loop thru) Item name, price, quantity purchased, link to buy more, link to item page</p>
      </section>
  )
}

export default PurchaseHistory;