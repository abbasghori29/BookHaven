import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddBook({ addBook, user }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('Please log in to add a book.');
      navigate('/login');
      return;
    }
    
    const formData = new FormData(e.target);
    const newBook = {
      title: formData.get('title'),
      author: formData.get('author'),
      price: parseFloat(formData.get('price')),
      description: formData.get('description')
    };
    
    addBook(newBook);
    e.target.reset();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto text-center py-5">
          <i className="bi bi-lock-fill display-1 text-secondary opacity-50 mb-3"></i>
          <h2 className="mb-3">Login Required</h2>
          <p className="mb-4">You need to be logged in to add a new book.</p>
          <Link to="/login" className="btn" style={{ backgroundColor: '#ff6b00', color: 'white' }}>
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-8 col-lg-6 mx-auto">
        <div className="d-flex align-items-center mb-4">
          <Link to="/" className="text-decoration-none me-3">
            <i className="bi bi-arrow-left"></i>
          </Link>
          <h1 className="mb-0">Add a New Book</h1>
        </div>
        
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price (PKR)</label>

                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  step="0.01"
                  min="0"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn" 
                  style={{ backgroundColor: '#ff6b00', color: 'white' }}
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
