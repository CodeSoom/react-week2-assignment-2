import React from 'react';

export default function Item({ item, onClick }) {
  return (
    <li>
      <span>{`${item.todo} `}</span>
      <button type="button" onClick={() => onClick(item.id)}>완료</button>
    </li>
  );
}
