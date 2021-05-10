import React from 'react';

export default function List({ items }) {
  const element = (items.length)
    ? (
      <ul>
        {items.map((item) => (
          <li>
            {item}
            <button type="button">완료</button>
          </li>

        ))}
      </ul>
    )
    : '아무 일도 하기 싫다';

  return element;
}
