import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Home = () => {
  const book = useSelector((state) => state.bookReducer);

  return (
    <div className="listContainer">
      <div className="bookDiv">
        {book.map((item) => <Book key={item.id} bo={item} />)}
      </div>
      <h2 className="newBook">Add new book</h2>
      <Form />
    </div>
  );
};

export default Home;
