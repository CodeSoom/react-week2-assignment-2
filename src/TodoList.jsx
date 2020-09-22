import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoItems, deleteTodoItem }) {
  if (todoItems.length === 0) return <p>할 일이 없어요!</p>;
  return (
    <ul>
      {todoItems.map((item, index) => <TodoItem item={item} deleteTodoItem={deleteTodoItem} key={`todoItem${index}`} />)}
    </ul>
  );
}
export default TodoList;
