import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    alerts: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Link to your backend here
    console.log('Form data submitted', formData);
  };

  return (
    <section>
      <h2><a href="#form-section">Sign up here:</a></h2>
      <form id="form-section" onSubmit={handleSubmit}>
        <label>
          First Name: 
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name: 
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Email: 
          <input name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password: 
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Sign up for alerts?
          <input type="radio" id="allalerts" name="alerts" value="all" onChange={handleChange} />
          <label htmlFor="allalerts">All alerts</label>
          <input type="radio" id="somealerts" name="alerts" value="some" onChange={handleChange} />
          <label htmlFor="somealerts">Some alerts</label>
          <input type="radio" id="noalerts" name="alerts" value="none" onChange={handleChange} />
          <label htmlFor="noalerts">No alerts</label>
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegisterForm;

