import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoItems }) {
  return (
    <ul>
      {todoItems.map((item, index) => <TodoItem item={item} key={`todoItem${index}`} />)}
    </ul>
  );
}
export default TodoList;
