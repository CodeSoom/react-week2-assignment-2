import React from 'react';
import PropTypes from 'prop-types';

export default function TodoForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.todoText.value;
    if (todoText.trim()) {
      onSubmit(todoText);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        name="todoText"
      />
      <button type="submit">추가</button>
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
