import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bo }) => {
  const { name, author } = bo;

  return (
    <div className="bookContainer">
      <h2>
        {
          name
        }
        {' '}

      </h2>
      <h3>
        {' '}
        {
          author
        }
        {' '}
      </h3>
      <button type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  bo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
