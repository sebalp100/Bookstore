import React from 'react';

const Book = (pro) => {
  const { title, author } = pro;

  return (
    <div className="bookContainer">
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
};

export default Book;
