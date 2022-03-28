import React from 'react';

export default function Todo({ content }) {
  const key = Object.keys(content);

  const todo = Object.values(content);
  return (
    <li key={key}>
      {todo}
    </li>
  );
}
