import React from 'react';

import TodoItem from './TodoItem';

function TodoItems({ list, onClick }) {
  return (
    <ol>
      {list.map((item) => (
        <TodoItem
          key={item}
          value={item}
          onClick={() => onClick(item)}
        />
      ))}
    </ol>
  );
}

export default TodoItems;
