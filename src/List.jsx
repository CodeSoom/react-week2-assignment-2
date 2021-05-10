import React from 'react';
import * as R from 'ramda';
import Item from './Item';

export default function List({ items, onClick }) {
  const element = (R.isEmpty(items))
    ? <p>할 일이 없어요!</p>
    : (
      <ol>
        {items.map((item) => (
          <Item
            content={item.content}
            onClick={() => onClick(item.id)}
          />
        ))}
      </ol>
    );

  return element;
}
