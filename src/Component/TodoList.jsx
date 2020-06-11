import React from 'react';

import Empty from './Empty';

export default function TodoList({ items, onClick }) {
  if (!items.length) {
    return <Empty />;
  }
  return (
    items.map((item) => (
      <div key={item.id}>
        {item.id}
        .
        {item.value}
        <button type="button" onClick={() => onClick(item)}>완료</button>
      </div>
    ))
  );
}
