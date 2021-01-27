import React from 'react';

import Task from './Task';

function List({ list }) {
  return (
    <ul>
      {
        list.map((task) => (
          <Task key={task.message} message={task.message} />
        ))
      }
    </ul>
  );
}

export default List;
