import React from 'react';

export default function Todo({ title, onClick, id }) {
  return (
    <li key={id.toString()}>
      {title}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
}
