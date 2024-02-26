import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../App.css";
import { debounce } from "lodash";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [expandedBookId, setExpandedBookId] = useState(null);

  const fetchBooks = useCallback(async () => {
    if (searchTerm !== "") {
      try {
        const response = await axios.get(`/books?q=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const debouncedFetchBooks = debounce(() => {
      fetchBooks();
    }, 300);

    debouncedFetchBooks();

    return () => {
      debouncedFetchBooks.cancel();
    };
  }, [fetchBooks]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleSynopsis = (id) => {
    setExpandedBookId(expandedBookId === id ? null : id);
  };

  const renderAvailability = (isAvailable) => (
    <span style={{ color: isAvailable ? "green" : "red" }}>
      {isAvailable ? "✔ Available" : "✖ Unavailable"}
    </span>
  );

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
      {searchResults.length > 0 ? (
        searchResults.map((book) => (
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
        ))
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
}

export default SearchPage;
