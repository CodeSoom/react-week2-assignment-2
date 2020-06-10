import React from 'react';

import Todo from './Todo';
import Form from './Form';

function TodoList({
  value, onChange, onSubmit, isEmpty, todos, onCompleteTodo,
}) {
  return (
    <div>
      <Form onSubmit={onSubmit} value={value} onChange={onChange} isEmpty={isEmpty} />
      {todos.length ? todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          todo={todo}
          onCompleteTodo={() => onCompleteTodo(todo.id)}
        />
      )) : <span>할 일이 없어요!</span>}
    </div>
  );
}

export default TodoList;
