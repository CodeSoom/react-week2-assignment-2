import React from 'react';

export default function TodoAddButton({ onClick }) {
  return (
    <button type="button" onClick={() => onClick(document.getElementById('todo-input').value)}>추가</button>
  );
}
