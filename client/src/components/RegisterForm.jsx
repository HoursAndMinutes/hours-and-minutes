import { useState } from "react";
import './RegisterForm.css';
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const result = await fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      }),
    });
    const token = await result.json();
    navigate('/login');
    return token;
  };

  return (
    <section id="register-container">
      <h2>Sign up here:</h2>
      <form id="form-section" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="inputs"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="inputs"
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputs"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputs"
          />
        </label>

        <button id="register-button" type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegisterForm;
