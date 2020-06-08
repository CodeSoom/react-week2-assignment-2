import React from 'react';

import TodoListItem from './TodoListItem';

export default function TodoList({ list, handleRemove }) {
  return (
    <ul style={{ marginTop: '20px' }}>
      {
        list.map((item) => (
          <TodoListItem key={item.id} item={item} onClick={() => handleRemove(item.id)} />
        ))
      }
    </ul>
  );
}
