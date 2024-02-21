// BooksList.js
import React, { useState, useEffect } from 'react';
import { fetchBooks } from './api';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.name}</li>

         ))}
      </ul>
    </div>
  );
};

export default BooksList;
  