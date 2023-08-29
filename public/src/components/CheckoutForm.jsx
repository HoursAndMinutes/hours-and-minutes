const CheckoutForm = () => {

  //TO DO: Billing address same as shipping?
  //TO DO: card info etc through stripe api
  return (
      <section>
        <section>
          <h2>Shipping Information</h2>
          <form>
            <label>Street Address: <input/></label>
            <label>Apartment: <input/></label>
            <label>Zip Code: <input/></label>
            <label>State: <input/></label>
            <label>Country: <input/></label>
            <label>Billing Address: <input/></label>
          </form>
        </section>
        <section>
          <h2>Payment Method</h2>
        </section>
      </section>
  )
}

export default CheckoutForm;