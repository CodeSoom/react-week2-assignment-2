import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todoItems, removeSelectedTodo }) {
  return (
    <ul>
      {todoItems.length === 0
        ? <p>할 일이 없어요!</p>
        : (todoItems.map((item) => (
          <TodoItem
            item={item}
            removeSelectedTodo={removeSelectedTodo}
            key={item.id}
          />
        )))}
    </ul>
  );
}
export default TodoList;
