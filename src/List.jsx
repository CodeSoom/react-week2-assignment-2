import React from 'react';

import Item from './Item';

export default function List({ tasks }) {
  return (
    <ol>
      {tasks.map(task => (
        <Item key={task.id} title={task.title} />
      ))}
    </ol>
  );
}
