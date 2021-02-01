import React from 'react';

import Item from './Item';

export default function List({ isEmptyList, tasks, onClickDeleteTask }) {
  if (isEmptyList) {
    return (
      <p>
        할 일이 없어요!
      </p>
    );
  }
  return (
    <ol>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onClickDelete={onClickDeleteTask} />
      ))}
    </ol>
  );
}
