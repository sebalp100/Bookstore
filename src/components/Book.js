import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bo }) => (
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
    <button type="button">Delete</button>
  </div>
);

Book.propTypes = {
  bo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
