import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = ({ bo }) => {
  const dispatch = useDispatch();

  return (
    <div className="bookContainer">
      <h2>
        {
          bo.name
        }
        {' '}

      </h2>
      <h3>
        {' '}
        {
          bo.author
        }
        {' '}
      </h3>
      <button onClick={() => { dispatch(deleteBook({ id: bo.id })); }} type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  bo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
