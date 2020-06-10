import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

export default function TodoPage(
  {
    todos, value, onChange, onSubmit, onRemove,
  },
) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInsert
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {!todos.length
        ? <p>할 일이 없어요!</p>
        : (
          <TodoList
            todos={todos}
            onRemove={onRemove}
          />
        )}
    </div>
  );
}
