import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import bannerImage from '../images/banner.jpg';
import Footer from '../components/footer';
function Home({ books, favorites, toggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <img src={bannerImage} alt="Banner" className="img-fluid mb-4 rounded" />
      <div className="row mb-4 align-items-center">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold mb-3">
            Welcome to <span style={{ color: '#ff6b00' }}>BookHaven</span>
          </h1>
          <p className="lead text-secondary">Discover your next favorite book in our curated collection.</p>
        </div>
        <div className="col-lg-6">
          <div className="input-group mt-lg-4 shadow-sm">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-secondary"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search books by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search books"
            />
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="col">
              <BookCard book={book} favorites={favorites} toggleFavorite={toggleFavorite} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <i className="bi bi-search display-1 text-secondary opacity-50"></i>
            <p className="mt-3 text-secondary">No books found matching your search.</p>
          </div>
        )}
      </div>
    </div>

  );
}

export default Home;
