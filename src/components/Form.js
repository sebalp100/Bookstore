import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewBook } from '../redux/books/newSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const handleBook = (name, author) => {
    const id = Math.floor(Math.random() * 1000);
    const newBook = {
      item_id: id,
      title: name,
      author,
      category: 'Fiction',
    };
    dispatch(saveNewBook(newBook));
    setName('');
    setAuthor('');
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
        <button onClick={() => handleBook(name, author)} type="button" className="addButton">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
