import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import AddBook from './pages/AddBook';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Footer from './components/footer';
import { initialBooks } from './data/books';
import './App.css';

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1, reviews: [] }]);
  };

  const addReview = (bookId, review) => {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { ...book, reviews: [...book.reviews, { ...review, id: book.reviews.length + 1 }] }
          : book
      )
    );
  };

  const toggleFavorite = (bookId) => {
    if (favorites.includes(bookId)) {
      setFavorites(favorites.filter((id) => id !== bookId));
    } else {
      setFavorites([...favorites, bookId]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="py-4"> 
          <Routes>
            <Route
              path="/"
              element={<Home books={books} favorites={favorites} toggleFavorite={toggleFavorite} />}
            />
            <Route
              path="/book/:id"
              element={
                <BookDetail
                  books={books}
                  addReview={addReview}
                  user={user}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/add-book" element={<AddBook addBook={addBook} user={user} />} />
            <Route
              path="/favorites"
              element={<Favorites books={books} favorites={favorites} toggleFavorite={toggleFavorite} />}
            />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </div>

        <div><Footer /></div>

      </div>
    </Router>
  );
}

export default App;
