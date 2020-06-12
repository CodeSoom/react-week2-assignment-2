import React from 'react';

import Empty from './Empty';

export default function TodoList({ items, onClick }) {
  if (!items.length) {
    return <Empty />;
  }
  return (
    items.map((item, i) => (
      <div key={item.id}>
        {i + 1}
        .
        {item.value}
        <button type="button" onClick={() => onClick(item)}>완료</button>
      </div>
    ))
  );
}
