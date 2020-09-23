import React from 'react';

export default function TodoItem({ index, name }) {
  return (
    <p>
      {index + 1}
      .
      {name}
      <button type="button">완료</button>
    </p>
  );
}
