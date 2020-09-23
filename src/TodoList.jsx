import React from 'react';

export default function TodoList({ tasks }) {
  return (
    tasks.map(({ name, date }, index) => (
      <p key={date}>
        {index + 1}
        .
        {name}
        <button type="button">완료</button>
      </p>
    ))
  );
}
