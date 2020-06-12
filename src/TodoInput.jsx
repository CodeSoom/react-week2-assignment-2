import React from 'react';

const TodoInputStyle = {
  outline: 'none',
  flex: 1,
  margin: '0 2px 0 0',
  padding: 0,
};

const FormStyle = {
  width: '100%',
  display: 'flex',
  padding: '3px',
};

export default function TodoInput({ input, onInputChange, onInputSubmit }) {
  return (
    <form style={FormStyle} onSubmit={onInputSubmit}>
      <input onChange={onInputChange} value={input} style={TodoInputStyle} />
      <button type="submit">추가</button>
    </form>
  );
}
