import React from 'react';
import Task from './Task';

function TodoList({ values, onClick }) {
  return (
    <ol>
      {
        values.map((a, i) => (
          <Task key={i.toString()} dataKey={i} value={a.value} onClick={onClick} />
        ))
      }
    </ol>
  );
}

export default TodoList;
