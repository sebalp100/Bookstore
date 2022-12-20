import React from 'react';
import Book from './Book';
import Form from './Form';

const Home = () => (
  <div className="listContainer">
    <div className="bookDiv">
      <Book />
    </div>
    <h2 className="newBook">Add new book</h2>
    <Form />
  </div>
);
export default Home;
