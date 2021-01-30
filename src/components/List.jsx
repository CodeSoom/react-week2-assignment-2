import React from 'react';

import Item from './Item';

export default function List({ tasks, onClickDelete }) {
  function getToDoEmptyPage() {
    return (
      <p>
        할 일이 없어요!
      </p>
    );
  }

  function getToDoPage() {
    return (
      <ol>
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClickDelete={onClickDelete} />
        ))}
      </ol>
    );
  }

  return tasks.length ? getToDoPage() : getToDoEmptyPage();
}
