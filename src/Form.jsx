import React from 'react';

export default ({ value, handleSubmit, handleInput }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={handleInput} />
    <button type="submit">추가</button>
  </form>
);
