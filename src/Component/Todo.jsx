import React from 'react';

export default function Todo({ items, onClick }) {
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
