import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer 
      className="bg-dark text-light py-5" 
      style={{ 
        backgroundColor: '#333', 
        borderTop: '4px solid #ff6b00' 
      }}
    >
      <div className="container">
        <div className="row g-4">
          
          <div className="col-md-4">
            <h5 
              className="fw-bold mb-3"
              style={{ 
                color: '#ff6b00', 
                fontSize: '1.5rem', 
                letterSpacing: '0.5px' 
              }}
            >
              <i className="bi bi-book me-2"></i>
              BookHaven
            </h5>
            <p 
              style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6', 
                color: '#ccc' 
              }}
            >
              Discover your next favorite book with BookHaven. Explore, favorite, and review a world of literature.
            </p>
          </div>

    
          <div className="col-md-4">
            <h5 
              className="fw-bold mb-3"
              style={{ 
                color: '#fff', 
                fontSize: '1.25rem' 
              }}
            >
              Quick Links
            </h5>
            <ul 
              className="list-unstyled"
              style={{ lineHeight: '2' }}
            >
              <li>
                <Link 
                  to="/" 
                  className="text-decoration-none"
                  style={{ 
                    color: '#ccc', 
                    fontSize: '1rem', 
                    transition: 'color 0.3s ease-in-out' 
                  }}
                  onMouseOver={(e) => e.target.style.color = '#ff6b00'}
                  onMouseOut={(e) => e.target.style.color = '#ccc'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/favorites" 
                  className="text-decoration-none"
                  style={{ 
                    color: '#ccc', 
                    fontSize: '1rem', 
                    transition: 'color 0.3s ease-in-out' 
                  }}
                  onMouseOver={(e) => e.target.style.color = '#ff6b00'}
                  onMouseOut={(e) => e.target.style.color = '#ccc'}
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link 
                  to="/add-book" 
                  className="text-decoration-none"
                  style={{ 
                    color: '#ccc', 
                    fontSize: '1rem', 
                    transition: 'color 0.3s ease-in-out' 
                  }}
                  onMouseOver={(e) => e.target.style.color = '#ff6b00'}
                  onMouseOut={(e) => e.target.style.color = '#ccc'}
                >
                  Add Book
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="text-decoration-none"
                  style={{ 
                    color: '#ccc', 
                    fontSize: '1rem', 
                    transition: 'color 0.3s ease-in-out' 
                  }}
                  onMouseOver={(e) => e.target.style.color = '#ff6b00'}
                  onMouseOut={(e) => e.target.style.color = '#ccc'}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="col-md-4">
            <h5 
              className="fw-bold mb-3"
              style={{ 
                color: '#fff', 
                fontSize: '1.25rem' 
              }}
            >
              Connect With Us
            </h5>
            <div className="d-flex mb-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="me-3"
                style={{ 
                  color: '#ccc', 
                  fontSize: '1.5rem', 
                  transition: 'color 0.3s ease-in-out' 
                }}
                onMouseOver={(e) => e.target.style.color = '#ff6b00'}
                onMouseOut={(e) => e.target.style.color = '#ccc'}
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="me-3"
                style={{ 
                  color: '#ccc', 
                  fontSize: '1.5rem', 
                  transition: 'color 0.3s ease-in-out' 
                }}
                onMouseOver={(e) => e.target.style.color = '#ff6b00'}
                onMouseOut={(e) => e.target.style.color = '#ccc'}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#ccc', 
                  fontSize: '1.5rem', 
                  transition: 'color 0.3s ease-in-out' 
                }}
                onMouseOver={(e) => e.target.style.color = '#ff6b00'}
                onMouseOut={(e) => e.target.style.color = '#ccc'}
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <p 
              style={{ 
                fontSize: '1rem', 
                color: '#ccc' 
              }}
            >
              <i className="bi bi-envelope me-2"></i>
              support@bookhaven.com
            </p>
          </div>
        </div>

    
        <div 
          className="text-center mt-5 pt-4 border-top"
          style={{ borderColor: '#444 !important' }}
        >
          <p 
            style={{ 
              fontSize: '0.9rem', 
              color: '#999' 
            }}
          >
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;