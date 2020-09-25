import React from 'react';

function ToDoForm({ onClick, toDoText, onChange }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="input" type="text" value={toDoText} onChange={(e) => onChange(e.target.value)} />
      <button type="submit">
        추가
      </button>
    </form>
  );
}

export default ToDoForm;
