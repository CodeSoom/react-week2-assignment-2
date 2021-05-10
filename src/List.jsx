import React from 'react';

export default function List({ items, onClick }) {
  const element = (items.length)
    ? (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.content}
            <button type="button" onClick={() => onClick(item.id)}>완료</button>
          </li>

        ))}
      </ul>
    )
    : '아무 일도 하기 싫다';

  return element;
}
