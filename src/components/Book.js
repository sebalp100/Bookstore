import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { removeNewBook } from '../redux/books/newSlice';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const dd = books.books;

  return (
    <div>
      <h2 className="list">Book List</h2>
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
              <div className="bookContainer" key={nanoid()}>
                <li key={user.title}>{user.title}</li>
                <li key={user.author}>{user.author}</li>
                <button type="button" onClick={() => dispatch(removeNewBook(user.id))}>DELETE</button>
              </div>
            ))
          }
        </ul>
      ) : null}
    </div>
  );
};

export default Book;
