import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, favorites, toggleFavorite }) {
  const isFavorite = favorites.includes(book.id);

  return (
    <div 
      className="card h-100 shadow-sm border-0 hover-card"
      style={{
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        borderRadius: '12px',
        overflow: 'hidden',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <div className="card-body d-flex flex-column" style={{ padding: '1.5rem' }}>
        <img 
          src={book.image} 
          alt={book.title} 
          className="card-img-top"
          style={{
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}
        />

        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 
            className="card-title"
            style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#333',
              margin: 0,
              lineHeight: '1.3'
            }}
          >
            {book.title}
          </h5>
          <button
            className="btn btn-sm text-danger border-0"
            onClick={() => toggleFavorite(book.id)}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            style={{
              padding: '0.25rem',
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`} style={{ fontSize: '1.2rem' }}></i>
          </button>
        </div>
        <p 
          className="card-text text-muted mb-1"
          style={{
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}
        >
          <small>
            <i className="bi bi-person-fill me-1" style={{ verticalAlign: 'middle' }}></i>
            {book.author}
          </small>
        </p>
        <p 
          className="card-text fw-bold" 
          style={{ 
            color: '#ff6b00',
            fontSize: '1.1rem',
            margin: '0.5rem 0 1rem 0'
          }}
        >
          PKR {book.price}

        </p>
        <div className="mt-auto">
          <Link to={`/book/${book.id}`} className="w-100">
            <button 
              className="btn w-100"
              style={{ 
                backgroundColor: '#333333',
                color: 'white',
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'background-color 0.3s ease-in-out',
                border: 'none',
                ':hover': {
                  backgroundColor: '#454545',
                  boxShadow: '0 4px 15px rgba(51, 51, 51, 0.2)'
                }
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
