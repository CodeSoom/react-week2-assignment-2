import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todoItems, removeSelectedTodo }) {
  if (todoItems.length === 0) return <p>할 일이 없어요!</p>;
  return (
    <ul>
      {todoItems.map((item) => (
        <TodoItem
          item={item}
          removeSelectedTodo={removeSelectedTodo}
          key={item.id}
        />
      ))}
    </ul>
  );
}
export default TodoList;
