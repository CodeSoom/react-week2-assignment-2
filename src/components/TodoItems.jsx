import React from 'react';

import TodoItem from './TodoItem';

function TodoItems({ list }) {
  return (
    <ol>
      {list.map((item) => (
        <TodoItem
          key={item}
          value={item}
        />
      ))}
    </ol>
  );
}

export default TodoItems;
