import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todos, onRemove }) {
  return (
    <div>
      {todos.length ? todos.map((value, index) => (
        <TodoItem
          key={value.id}
          todo={value.item}
          count={index}
          onRemove={() => onRemove(value.id)}
        />
      )) : (<div>할 일이 없어요!</div>)}
    </div>
  );
}

export default TodoList;
