import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const handleBook = (name, author) => {
    const id = Math.floor(Math.random() * 1000);
    const newBook = {
      id,
      name,
      author,
    };
    dispatch(createBook(newBook));
  };
  return (
    <div className="formContainer">
      <form>
        <input
          type="text"
          className="input-text"
          placeholder="Add title"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={() => handleBook(name, author)} type="button">ADD</button>
      </form>
    </div>
  );
};

export default Form;
