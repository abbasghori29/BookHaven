import React, { useState } from 'react';
import { Star } from 'lucide-react';

function ReviewForm({ addReview, bookId, user }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert('Please select a rating');
      return;
    }
    
    addReview(bookId, { rating, comment, user });
    setRating(0);
    setComment('');
  };

  return (
    <div className="container">
      <div className="card shadow-sm mx-auto mt-3" style={{ maxWidth: '500px' }}>
        <div className="card-header bg-white">
          <h5 className="card-title mb-0">Your Review</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Your Review</label>
              <textarea
                id="comment"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                style={{ 
                  resize: 'vertical',
                  minHeight: '100px',
                  color: '#333',
                  fontFamily: '"Inter", sans-serif',
                  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)'
                }}
                placeholder="Write your review here..."
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Your Rating</label>
              <div className="d-flex align-items-center">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHoverRating(ratingValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="btn p-1 border-0"
                    >
                      <Star
                        size={24}
                        fill={(hoverRating || rating) >= ratingValue ? "#FFD700" : "none"}
                        stroke={(hoverRating || rating) >= ratingValue ? "#FFD700" : "#6B7280"}
                        strokeWidth={1.5}
                      />
                    </button>
                  );
                })}
                <span className="ms-2 text-secondary">
                  {rating ? `${rating} / 5` : 'Select a rating'}
                </span>
              </div>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;