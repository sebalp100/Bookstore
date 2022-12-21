import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { removeNewBook } from '../redux/books/newSlice';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const dd = books.books;

  return (
    <div>
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
                <div className="innerCont">
                  <div className="bookContent">
                    <li key={user.title}>{user.title}</li>
                    <li key={user.author}>{user.author}</li>
                    <div className="buttons">
                      <button type="button" className="action">Comments</button>
                      <div className="divider" />
                      <button type="button" onClick={() => dispatch(removeNewBook(user.id))} className="action">Remove</button>
                      <div className="divider" />
                      <button type="button" className="action">Edit</button>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="progressCont">
                      <div className="progressItem" />
                    </div>
                    <div className="progress-stat">
                      <p className="progressAmount">64%</p>
                      <p className="completed">Completed</p>
                    </div>
                    <div className="progDiv" />
                    <div className="chapterContainer">
                      <div>
                        <p className="current">CURRENT CHAPTER</p>
                        <p className="chapter">Chapter 5</p>
                      </div>
                      <div>
                        <button type="button" className="update">UPDATE PROGRESS</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </ul>
      ) : null}
    </div>
  );
};

export default Book;
