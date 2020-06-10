import React from 'react';

export default function TodoItem({ item, onClick }) {
  const style = { marginLeft: '10px' };
  return (
    <li>
      {item.text}
      <button type="button" style={style} onClick={onClick}>완료</button>
    </li>
  );
}
