import React from 'react';

import Item from './Item';

export default function TodoItems({ items, handleComplete }) {
  return (
    <div>
      {items.length === 0 ? (
        <div>할 일이 없어요.</div>
      ) : (
        <ol>
          {items.map((item) => (
            <Item key={item.id} item={item} handleComplete={handleComplete} />
          ))}
        </ol>
      )}
    </div>
  );
}
