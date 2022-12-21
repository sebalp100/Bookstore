import React from 'react';
import Book from './Book';
import Form from './Form';

const Home = () => (
  <div className="listContainer">
    <div className="bookDiv">
      <Book />
    </div>
    <div className="bar" />
    <h2 className="newBook">ADD NEW BOOK</h2>
    <Form />
  </div>
);
export default Home;
