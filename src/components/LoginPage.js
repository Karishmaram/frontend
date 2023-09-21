import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); // State to store the error message
  const [successMessage, setSuccessMessage] = useState(null); // State to store the success message
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your login endpoint
    axios.post('http://localhost:8190/api/login', formData) // Use the appropriate URL for your backend
      .then(response => {
        console.log(response.data);
        setSuccessMessage("Login successful"); // Set the success message
        // Handle success (e.g., set user session and redirect)
       
      })
      .catch(err => {
        if (err.response) {
          // If the error is from the server (HTTP error response)
          setError("Invalid credentials"); // Set an error message
        } else {
          // Handle other errors (e.g., network issues)
          console.error(err);
        }
      });
  };

  return (
    <div className="login-page">
    <div className="login-container">

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;