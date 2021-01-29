import React from 'react';
import uuid from 'react-uuid';

import Task from './Task';

function TaskList({ list, onClick }) {
  return (
    <div>
      { list.length === 0 ? (
        <p>할 일이 없어요!</p>
      )
        : (
          <ol>
            {
              list.map(({ id, message }) => (
                <Task key={uuid()} id={id} message={message} onClick={onClick} />
              ))
            }
          </ol>
        )}
    </div>
  );
}

export default TaskList;
