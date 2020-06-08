import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleRemoveTodo }) {
  return (
    todos.length === 0
      ? '할 일이 없어요!'
      : (
        <ul>
          {todos.map((todo, index) => {
            const key = index + 1;
            return (
              <TodoItem
                key={key}
                index={key}
                todo={todo.todo}
                handleRemoveTodo={handleRemoveTodo}
              />
            );
          })}
        </ul>
      )
  );
}

export default TodoList;
