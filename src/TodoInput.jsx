import React, { useState } from 'react';

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

const TodoInput = ({ onAddTodoItem }) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodoItem({ todo });
    setTodo('');
  };

  return (
    <form style={FormStyle}>
      <input onChange={handleChange} value={todo} style={TodoInputStyle} />
      <button type="submit" onClick={handleSubmit}>추가</button>
    </form>
  );
};

export default TodoInput;
