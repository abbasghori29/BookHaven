import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

function Favorites({ books, favorites, toggleFavorite }) {
  const favoriteBooks = books.filter((book) => favorites.includes(book.id));

  return (
    <div 
      className="container py-5" 
      style={{ 
        backgroundColor: '#f8f9fa', 
        minHeight: '100vh' 
      }}
    >
      <h1 
        className="mb-5"
        style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          color: '#333', 
          display: 'flex', 
          alignItems: 'center' 
        }}
      >
        <i 
          className="bi bi-heart-fill me-3" 
          style={{ 
            color: '#ff6b00', 
            fontSize: '2.2rem' 
          }}
        ></i>
        Your Favorites
      </h1>
      
      {favoriteBooks.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {favoriteBooks.map((book) => (
            <div key={book.id} className="col">
              <BookCard 
                book={book} 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div 
          className="text-center py-5 bg-white rounded shadow-lg"
          style={{ 
            borderRadius: '15px', 
            padding: '3rem', 
            maxWidth: '600px', 
            margin: '0 auto',
            border: '1px solid #eee'
          }}
        >
          <i 
            className="bi bi-heart display-1 text-secondary opacity-50 mb-4" 
            style={{ 
              fontSize: '5rem', 
              color: '#ddd' 
            }}
          ></i>
          <h3 
            className="mt-3 mb-3"
            style={{ 
              fontWeight: '600', 
              color: '#333', 
              fontSize: '1.75rem' 
            }}
          >
            No Favorites Yet
          </h3>
          <p 
            className="mb-4 text-secondary"
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              color: '#777' 
            }}
          >
            Start browsing and add books to your favorites!
          </p>
          <Link 
            to="/" 
            className="btn"
            style={{ 
              backgroundColor: '#ff6b00',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '10px',
              fontWeight: '500',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease-in-out',
              border: 'none'
            }}
          >
            Browse Books
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;