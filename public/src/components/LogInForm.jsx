const LogInForm = () => {
  //TO DO: Return token, link to backend, sign in user if info is correct
  return (
      <section>
        <h2>Log in here:</h2>
        <form>
          <label>Email: <input /></label>
          <label>Password: <input type="password" /></label>
          <button>Log in</button>
        </form>
      </section>
  )
}

export default LogInForm;