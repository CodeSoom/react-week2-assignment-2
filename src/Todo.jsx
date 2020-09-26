import React from 'react';

export default function Todo({ id, content, onClick }) {
  return (
    <li key={id}>
      <span>{content}</span>
      <button type="button" onClick={onClick}>완료</button>
    </li>
  );
}
