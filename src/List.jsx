import React from 'react';
import Item from './Item';

export default function List({ items, onClick }) {
  const element = (items.length)
    ? (
      <ol>
        {items.map((item) => (
          <Item
            content={item.content}
            onClick={() => onClick(item.id)}
          />
        ))}
      </ol>
    )
    : <p>할 일이 없어요!</p>;

  return element;
}
