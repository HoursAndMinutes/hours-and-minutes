import { useState } from 'react';


const RegisterForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname:firstName, lastname:lastName, email, password }),
    });
    const data = await result.json();
    console.log(data);
  };

  return (
    <section>
      <h2><a href="#form-section">Sign up here:</a></h2>
      <form id="form-section" onSubmit={handleSubmit}>
        <label>
          First Name: 
          <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name: 
          <input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}  />
        </label>
        <label>
          Email: 
          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
        </label>
        <label>
          Password: 
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
        </label>
        {/* <label>
          Sign up for alerts?
          <input type="radio" id="allalerts" name="alerts" value="all" onChange={handleChange} />
          <label htmlFor="allalerts">All alerts</label>
          <input type="radio" id="somealerts" name="alerts" value="some" onChange={handleChange} />
          <label htmlFor="somealerts">Some alerts</label>
          <input type="radio" id="noalerts" name="alerts" value="none" onChange={handleChange} />
          <label htmlFor="noalerts">No alerts</label>
        </label> */}
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegisterForm;

