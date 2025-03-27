import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top" 
      style={{ 
        backgroundColor: '#ffffff',
        padding: '1rem 0',
        borderBottom: '1px solid #f5f5f5'
      }}
    >
      <div className="container">
        <Link 
          className="navbar-brand fw-bold" 
          to="/" 
          style={{ 
            color: '#ff6b00',
            fontSize: '1.5rem',
            letterSpacing: '0.5px'
          }}
        >
          <i className="bi bi-book me-2"></i>
          BookHaven
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavCollapse}
          style={{
            border: 'none',
            padding: '0.5rem'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarNav"
          style={{ transition: 'all 0.3s ease-in-out' }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/" 
                style={{ 
                  color: '#333',
                  padding: '0.75rem 1.25rem',
                  transition: 'color 0.2s ease-in-out',
                  ':hover': { color: '#ff6b00' }
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/add-book"
                style={{ 
                  color: '#333',
                  padding: '0.75rem 1.25rem',
                  transition: 'color 0.2s ease-in-out'
                }}
              >
                Add Book
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/favorites"
                style={{ 
                  color: '#333',
                  padding: '0.75rem 1.25rem',
                  transition: 'color 0.2s ease-in-out'
                }}
              >
                <i className="bi bi-heart me-1"></i>Favorites
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {user ? (
              <>
                <span 
                  className="me-3 text-secondary" 
                  style={{ 
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}
                >
                  Welcome, {user}!
                </span>
                <button
                  className="btn btn-outline-dark"
                  onClick={handleLogout}
                  style={{ 
                    borderColor: '#ff6b00', 
                    color: '#ff6b00',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease-in-out',
                    ':hover': {
                      backgroundColor: '#ff6b00',
                      color: '#ffffff'
                    }
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button
                  className="btn"
                  style={{ 
                    backgroundColor: '#ff6b00', 
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease-in-out',
                    border: 'none',
                    ':hover': {
                      backgroundColor: '#e66000',
                      boxShadow: '0 4px 15px rgba(255, 107, 0, 0.3)'
                    }
                  }}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;