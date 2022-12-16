import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import books, { deleteBook, fetchUsers } from '../redux/books/books';
import { fetchBooks } from '../redux/books/newSlice';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const dd = books.books;
  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.loading && <div>Loading...</div>}
      {!books.loading && books.error ? (
        <div>
          Error:
          {books.error}
        </div>
      ) : null}
      {!books.loading && books.books.length ? (
        <ul>
          {
            dd.map((user) => (
              <div key={user.id}>
                <li key={user.title}>{user.title}</li>
                <li key={user.author}>{user.author}</li>
              </div>
            ))
          }
        </ul>
      ) : null}
    </div>
  );
};

export default Book;
