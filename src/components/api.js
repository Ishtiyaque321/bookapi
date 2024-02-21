// api.js
export const fetchBooks = async () => {
    try {
      const response = await fetch('https://simple-books-api.glitch.me/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  