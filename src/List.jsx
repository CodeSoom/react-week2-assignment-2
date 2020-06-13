import React from 'react';

export default function List({ list, onClick }) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map((item) => (
        <li>
          <span>{`${item.todo} `}</span>
          <button type="button" data-id={item.id} onClick={onClick}>완료</button>
        </li>
      ))}
    </ul>
  );
}
