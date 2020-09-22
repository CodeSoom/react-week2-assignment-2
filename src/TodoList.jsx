import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoItems, deleteTodoItem }) {
  return (
    <ul>
      {todoItems.map((item, index) => <TodoItem item={item} deleteTodoItem={deleteTodoItem} key={`todoItem${index}`} />)}
    </ul>
  );
}
export default TodoList;
