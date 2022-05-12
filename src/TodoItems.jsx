import React from 'react';

function TodoItems({ items }) {
  return (
    <div>
      <p>to-do list</p>
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}
export default TodoItems;
