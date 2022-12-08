import React from 'react';
import Book from './Book';
import Form from './Form';

const Home = () => (
  <div className="listContainer">
    <div className="bookDiv">
      <Book title="Book1" author="Author1" />
      <button type="button">Remove</button>
    </div>
    <div className="bookDiv">
      <Book title="Book2" author="Author2" />
      <button type="button">Remove</button>
    </div>
    <div className="bookDiv">
      <Book title="Book3" author="Author3" />
      <button type="button">Remove</button>
    </div>
    <h2 className="newBook">Add new book</h2>
    <Form />
  </div>
);

export default Home;
