import React from 'react';

import Item from './Item';

function List({ tasks, onClickDelete }) {
  return (
    <ol>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onClickDelete={onClickDelete} />
      ))}
    </ol>
  );
}

export default List;
