import React from 'react';

export default function Todo({ todo }) {
  const key = Object.keys(todo);

  const value = Object.values(todo);
  return (
    <>
      <li key={key}>
        {value}
      </li>
    </>
  );
}
