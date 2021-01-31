import React from 'react';
import Task from './Task';

function List({ values, onClick }) {
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

export default List;
