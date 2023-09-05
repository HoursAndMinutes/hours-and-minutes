import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LogInForm.css'

const LogInForm = ({setToken}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const resultToken = await result.json();
    setToken(resultToken.token)
    localStorage.setItem("logintoken",resultToken.token)
    navigate('/')
  };

  return (
    <section className="login-form-container">
      <h2>Log in here:</h2>
      <form onSubmit={handleSubmit} className="form">
        <label id="email">
          Email:{" "}
          <input onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        <label id="password">
          Password:{" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </label>
        <button>Log in</button>
      </form>
    </section>
  );
};

export default LogInForm;
