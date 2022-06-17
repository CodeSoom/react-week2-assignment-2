import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onRemoveTodoItem }) {
  return (
    <div>
      {todos.length === 0 && (<p>할일이 없어요!</p>)}
      {todos.length > 0
          && todos.map(
            (item, index) => (
              <TodoItem item={item} index={index} onRemoveTodoItem={onRemoveTodoItem} />
            ),
          )}
    </div>
  );
}

export default TodoList;
