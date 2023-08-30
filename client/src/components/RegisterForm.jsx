const RegisterForm = () => {
  //TO DO: Link to backend
  //Take values and create new user
  //
  return (
      <section>
        <h2>Sign up here:</h2>
        <form>
          <label>First Name: <input /></label>
          <label>Last Name: <input /></label>
          <label>Email: <input /></label>
          <label>Password: <input type="password" /></label>
          <label>Sign up for alerts?
            <input type="radio" id="allalerts" name="alerts" /><label>All alerts</label>
            <input type="radio" id="somealerts" name="alerts" /><label>Some alerts</label>
            <input type="radio" id="noalerts" name="alerts" /><label>No alerts</label>
          </label>
        </form>
      </section>
  )
}

export default RegisterForm;