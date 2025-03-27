import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length < 3) {
        alert("Username must be at least 3 characters long.");
        return;
    }
    if (password.trim().length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    setUser(username);
    navigate('/');
  };

  return (
    <div 
      className="row justify-content-center align-items-center" 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f8f9fa' 
      }}
    >
      <div className="col-md-6 col-lg-5 col-xl-4">
        <div 
          className="text-center mb-5"
          style={{ paddingTop: '2rem' }}
        >
          <h2 
            className="display-5 fw-bold mb-3"
            style={{ 
              fontSize: '2.5rem', 
              color: '#333', 
              lineHeight: '1.2' 
            }}
          >
            Welcome to <span style={{ color: '#ff6b00' }}>BookHaven</span>
          </h2>
          <p 
            className="lead text-secondary"
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: '400', 
              color: '#777' 
            }}
          >
            Sign in to continue
          </p>
          <b>Note:I have just used login simulation here enter any username and 6 digit long password</b>
        </div>
        
        <div 
          className="card border-0 shadow-lg"
          style={{ 
            borderRadius: '15px', 
            backgroundColor: '#fff', 
            overflow: 'hidden' 
          }}
        >
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label 
                  htmlFor="username" 
                  className="form-label"
                  style={{ 
                    fontWeight: '500', 
                    color: '#333', 
                    fontSize: '1rem' 
                  }}
                >
                  Username
                </label>
                <div className="input-group">
                  <span 
                    className="input-group-text bg-white"
                    style={{ 
                      borderRadius: '8px 0 0 8px', 
                      borderColor: '#ddd', 
                      color: '#ff6b00' 
                    }}
                  >
                    <i className="bi bi-person" style={{ fontSize: '1.2rem' }}></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter any username (e.g., 'Alice')"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{
                      borderRadius: '0 8px 8px 0',
                      borderColor: '#ddd',
                      padding: '0.75rem 1rem',
                      fontSize: '1rem',
                      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.05)',
                      transition: 'border-color 0.3s ease-in-out'
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label 
                  htmlFor="password" 
                  className="form-label"
                  style={{ 
                    fontWeight: '500', 
                    color: '#333', 
                    fontSize: '1rem' 
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    borderColor: '#ddd',
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.05)',
                    transition: 'border-color 0.3s ease-in-out'
                  }}
                />
              </div>

              {username.trim().length < 3 && (
                <p className="text-danger" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Username must be at least 3 characters long.
                </p>
              )}

              <div className="d-grid mb-4">
                <button 
                  type="submit" 
                  className="btn py-2"
                  style={{ 
                    backgroundColor: '#ff6b00',
                    color: 'white',
                    borderRadius: '10px',
                    fontWeight: '500',
                    fontSize: '1.1rem',
                    padding: '0.75rem',
                    transition: 'all 0.3s ease-in-out',
                    border: 'none'
                  }}
                >
                  Login
                </button>
              </div>
              
              <div 
                className="text-center"
                style={{ color: '#777' }}
              >
                <p 
                  className="text-muted small"
                  style={{ fontSize: '0.9rem', lineHeight: '1.5' }}
                >
                  <i className="bi bi-info-circle me-1" style={{ fontSize: '1rem', color: '#ff6b00' }}></i>
                  
                </p>
              </div>
            </form>
          </div>
        </div>
        
        <div 
          className="text-center mt-4"
          style={{ paddingBottom: '2rem' }}
        >
          <Link 
            to="/" 
            className="text-decoration-none"
            style={{ 
              color: '#ff6b00',
              fontWeight: '500',
              fontSize: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'color 0.2s ease-in-out'
            }}
          >
            <i className="bi bi-arrow-left me-2" style={{ fontSize: '1.2rem' }}></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
