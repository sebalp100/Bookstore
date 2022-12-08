import React from 'react';

const Form = () => (
  <div className="formContainer">
    <form>
      <input
        type="text"
        className="input-text"
        placeholder="Add title"
        name="title"
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add author"
        name="author"
      />
    </form>
  </div>
);

export default Form;
