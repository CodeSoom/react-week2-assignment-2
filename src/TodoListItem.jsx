import React from 'react';

export default function TodoListItem({ item, onClick }) {
  return (
    <li>
      {item.text}
      <button type="button" style={{ marginLeft: '10px' }} onClick={onClick}>완료</button>
    </li>
  );
}
