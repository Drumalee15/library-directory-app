import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [expandedBookId, setExpandedBookId] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`/books?q=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    if (searchTerm !== "") {
      fetchBooks();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleSynopsis = (id) => {
    setExpandedBookId(expandedBookId === id ? null : id);
  };

  const renderAvailability = (isAvailable) => {
    return (
      <span style={{ color: isAvailable ? "green" : "red" }}>
        {isAvailable ? "✔ Available" : "✖ Unavailable"}
      </span>
    );
  };

  return (
    <div className="search-page">
      <h2>Dive into Your Next Reading Adventure</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter book title..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {searchResults.map((book) => (
        <div key={book.id} className="book">
          <h3>{book.title}</h3>
          <img src={book.imageUrl} alt={book.title} className="book-image" />
          <p>Author: {book.author}</p>
          <div>{renderAvailability(book.inStock)}</div>
          <button
            onClick={() => toggleSynopsis(book.id)}
            className="toggle-synopsis-btn"
          >
            {expandedBookId === book.id ? "Hide Synopsis" : "Show Synopsis"}
          </button>
          {expandedBookId === book.id && (
            <p className="book-synopsis">{book.synopsis}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
