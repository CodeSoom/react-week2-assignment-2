import React from 'react';

import TodoItem from './TodoItem';

function TodoItems({ list }) {
  return (
    <oi>
      {list.map((item) => (
        <TodoItem
          key={item}
          value={item}
        />
      ))}
    </oi>
  );
}

export default TodoItems;
