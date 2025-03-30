import React, { useState } from 'react';

function AddBook({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(''); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !price || !description || !image) return;
    const newBook = {
      id: Date.now(),
      title,
      author,
      price,
      description,
      image,
      reviews: []
    };
    addBook(newBook);
    setTitle('');
    setAuthor('');
    setPrice('');
    setDescription('');
    setImage('');
  };
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4" style={{ color: '#fd7e14' }}>Add a New Book</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Title</label>
                  <input 
                    type="text" 
                    className="form-control border-warning" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-bold">Author</label>
                  <input 
                    type="text" 
                    className="form-control border-warning" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-bold">Price (PKR)</label>
                  <input 
                    type="number" 
                    className="form-control border-warning" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-bold">Description</label>
                  <textarea 
                    className="form-control border-warning" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    rows="4"
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-bold">Image URL</label>
                  <input 
                    type="text" 
                    className="form-control border-warning" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)} 
                    required 
                  />
                  
                  {image && (
                    <div className="mt-3 text-center">
                      <img 
                        src={image} 
                        alt="Book preview" 
                        className="img-thumbnail" 
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>
                  )}
                </div>
                
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-warning btn-lg text-white fw-bold"
                  >
                    Add Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;