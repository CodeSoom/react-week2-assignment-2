import React from 'react';

import Item from './Item';

export default function List({ tasks, handleClickDeleteTask }) {
  return (
    <ol>
      {tasks.map(task => (
        <Item 
          key={task.id}
          task={task} 
          handleClickDeleteTask={handleClickDeleteTask} 
        />
      ))}
    </ol>
  );
}
