import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [todoText, setTodoText] = useState('');
  const handleChange = (e) => setTodoText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText) {
      alert('할 일을 입력해 주세요😀');
      return;
    }
    if (onSubmit) {
      onSubmit(todoText);
    }
    setTodoText('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 입력해주세요."
          onChange={handleChange}
          value={todoText}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
export default TodoForm;
