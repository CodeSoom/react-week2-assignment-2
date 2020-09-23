import React from 'react';

export default function TodoItem({ index, name, onClick }) {
  return (
    <p>
      {index + 1}
      .
      {name}
      <button type="button" onClick={onClick}>완료</button>
    </p>
  );
}
