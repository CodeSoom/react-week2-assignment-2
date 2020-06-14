import React from 'react';

import Item from './Item';

export default function List({ list, onClick }) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map((item) => (
        <Item key={item.id} item={item} onClick={onClick} />
      ))}
    </ul>
  );
}
