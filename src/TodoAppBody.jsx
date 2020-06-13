import React from 'react';

import TodoItems from './TodoItems';

const TodoAppBodyStyle = {
  marginTop: '10px',
};

export default function TodoAppBody({ todos, onRemoveTodoItem }) {
  return (
    <div style={TodoAppBodyStyle}>
      <TodoItems todos={todos} onRemoveTodoItem={onRemoveTodoItem} />
    </div>
  );
}
