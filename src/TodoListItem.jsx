import React from 'react';

export default function TodoListItem({ index, title, onClick }) {
  return (
    <p>
      {index + 1}
      .
      {title}
      <button type="button" onClick={onClick}>완료</button>
    </p>
  );
}
