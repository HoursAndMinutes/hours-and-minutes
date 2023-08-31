import { useState } from "react";

const LogInForm = () => {
  //TO DO: Return token, link to backend, sign in user if info is correct
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
    const token = await result.json();
    return token;
  };
  return (
    <section>
      <h2>Log in here:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        <label>
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
