import React from 'react';

import TodoListEmpty from './TodoListEmpty';
import TodoListNotEmpty from './TodoListNotEmpty';


export default function TodoList({ list, handleRemove }) {
  return (
    <ul style={{ marginTop: '20px' }}>
      {
        list.length ? <TodoListNotEmpty list={list} remove={handleRemove} /> : <TodoListEmpty />
      }
    </ul>
  );
}
