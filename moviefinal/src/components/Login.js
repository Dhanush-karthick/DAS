import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import './styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Example API request to handle login
    try {
      const response = await fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Handle successful login
        setSuccess('Login successful!');
        // Optionally, redirect to another page
        // window.location.href = '/dashboard';
      } else {
        // Handle errors
        setError(data.message || 'An error occurred during login');
      }
    } catch (err) {
      setError('An error occurred: ' + err.message);
    }
  };

  return (
    <Container className="login-container">
      <h2 className="login-header">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-btn">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
