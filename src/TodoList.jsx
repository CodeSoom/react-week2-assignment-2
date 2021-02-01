import React from 'react';
import Task from './Task';
import Empty from './Empty';

function TodoList({ values, onClick }) {
  return (
    values.length === 0
      ? (<Empty />)
      : (
        <ol>
          {
            values.map((a, i) => (
              <Task key={i.toString()} dataKey={i} value={a.value} onClick={onClick} />
            ))
          }
        </ol>
      )
  );
}

export default TodoList;
