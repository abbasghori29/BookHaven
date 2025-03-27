import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';

function BookDetail({ books, addReview, user, favorites, toggleFavorite }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const isFavorite = favorites.includes(book?.id);

  if (!book) {
    return (
      <div 
        className="text-center py-5" 
        style={{ 
          minHeight: '60vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <h2 
          className="mb-4" 
          style={{ 
            fontWeight: '600', 
            color: '#333', 
            fontSize: '2.25rem' 
          }}
        >
          Book Not Found!
        </h2>
        <Link 
          to="/" 
          className="btn btn-primary"
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '10px',
            fontWeight: '500',
            backgroundColor: '#ff6b00',
            border: 'none',
            transition: 'all 0.3s ease-in-out',
            fontSize: '1.1rem'
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div 
      className="row py-5" 
      style={{ 
        backgroundColor: '#f8f9fa', 
        minHeight: '100vh' 
      }}
    >
      <div className="col-lg-10 mx-auto">
        <div 
          className="d-flex justify-content-between align-items-center mb-5"
          style={{ padding: '0 1rem' }}
        >
          <Link 
            to="/" 
            className="text-decoration-none"
            style={{ 
              color: '#ff6b00',
              fontWeight: '600',
              fontSize: '1.15rem',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.2s ease-in-out'
            }}
          >
            <i className="bi bi-arrow-left me-2" style={{ fontSize: '1.3rem' }}></i>
            Back to Books
          </Link>
          <button
            className={`btn ${isFavorite ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
            onClick={() => toggleFavorite(book.id)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '10px',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'all 0.3s ease-in-out',
              borderWidth: '2px'
            }}
          >
            <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'} me-2`}></i>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>

        <div 
          className="card border-0 shadow-lg mb-5"
          style={{ 
            borderRadius: '15px', 
            overflow: 'hidden', 
            backgroundColor: '#fff',
            transition: 'box-shadow 0.3s ease-in-out'
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img 
                src={book.image} 
                alt={book.title}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=Book+Cover'; }}
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: '15px 0 0 15px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-5">
                <h1 
                  className="card-title mb-4"
                  style={{ 
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#333',
                    lineHeight: '1.2'
                  }}
                >
                  {book.title}
                </h1>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <p 
                      className="mb-3"
                      style={{ fontSize: '1.1rem', color: '#666' }}
                    >
                      <i className="bi bi-person-fill me-2 text-secondary" style={{ fontSize: '1.2rem' }}></i>
                      <span className="fw-medium">Author:</span> {book.author}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p 
                      className="mb-3"
                      style={{ fontSize: '1.1rem', color: '#666' }}
                    >
                      <i className="bi bi-tag-fill me-2 text-secondary" style={{ fontSize: '1.2rem' }}></i>
                      <span className="fw-medium">Price:</span> 
                      <span 
                        className="ms-2 fw-bold" 
                        style={{ color: '#ff6b00', fontSize: '1.4rem' }}
                      >
                        PKR {book.price}

                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <h5 
                    className="card-subtitle mb-3"
                    style={{ fontWeight: '600', color: '#333', fontSize: '1.25rem' }}
                  >
                    Description
                  </h5>
                  <p 
                    className="card-text"
                    style={{ 
                      lineHeight: '1.7', 
                      color: '#555', 
                      fontSize: '1rem' 
                    }}
                  >
                    {book.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="card border-0 shadow-lg mb-5"
          style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#fff' }}
        >
          <div className="card-body p-5">
            <h3 
              className="card-title mb-4"
              style={{ fontWeight: '600', color: '#333', fontSize: '1.75rem' }}
            >
              Reviews
            </h3>
            {book.reviews.length > 0 ? (
              <div className="list-group list-group-flush">
                {book.reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="list-group-item px-0 py-4"
                    style={{ 
                      borderBottom: '1px solid #f0f0f0', 
                      transition: 'background-color 0.2s ease-in-out' 
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 
                        className="mb-0"
                        style={{ fontWeight: '500', color: '#333', fontSize: '1.1rem' }}
                      >
                        {review.user}
                      </h6>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`bi ${i < review.rating ? 'bi-star-fill' : 'bi-star'} text-warning`}
                            style={{ fontSize: '1.1rem', marginLeft: '0.3rem' }}
                          ></i>
                        ))}
                      </div>
                    </div>
                    <p 
                      className="mb-0"
                      style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}
                    >
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div 
                className="text-center py-5 text-secondary"
                style={{ 
                  backgroundColor: '#fafafa', 
                  borderRadius: '10px',
                  border: '1px dashed #ddd'
                }}
              >
                <i 
                  className="bi bi-chat-square-text display-3 d-block mb-3 opacity-50"
                  style={{ color: '#ccc' }}
                ></i>
                <p 
                  style={{ 
                    fontSize: '1.15rem', 
                    color: '#777', 
                    fontWeight: '500' 
                  }}
                >
                  No reviews yet. Be the first to share your thoughts!
                </p>
              </div>
            )}
          </div>
        </div>

        <div 
          className="card border-0 shadow-lg"
          style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#fff' }}
        >
          <div className="card-body p-5">
            <h3 
              className="card-title mb-4"
              style={{ fontWeight: '600', color: '#333', fontSize: '1.75rem' }}
            >
              Add a Review
            </h3>
            {user ? (
              <ReviewForm addReview={addReview} bookId={book.id} user={user} />
            ) : (
              <div 
                className="text-center py-4"
                style={{ backgroundColor: '#fff' }}
              >
                <p 
                  className="mb-4"
                  style={{ color: '#666', fontSize: '1.15rem', fontWeight: '500' }}
                >
                  Please log in to submit a review.
                </p>
                <Link 
                  to="/login" 
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
                  Login to Review
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
