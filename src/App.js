import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchBooks } from './redux/books/newSlice';

import Home from './components/Home';
import Header from './components/Header';
import Categories from './components/Categories';

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books.refresh]);
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
