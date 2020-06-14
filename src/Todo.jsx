import React from 'react';

export default function Todo({ todo: { id, title }, onClick }) {
  return (
    <li>
      <span>{`${title} `}</span>
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
}
