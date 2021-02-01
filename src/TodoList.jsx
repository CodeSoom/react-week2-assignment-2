import React from 'react';

import Task from './Task';
import Empty from './Empty';

function TodoList({ tasks, onClick }) {
  return (
    tasks.length === 0
      ? (<Empty />)
      : (
        <ol>
          {
            tasks.map((task) => (
              <Task key={task.id} dataKey={task.id} value={task.title} onClick={onClick} />
            ))
          }
        </ol>
      )
  );
}

export default TodoList;
