import React from 'react';
import uuid from 'react-uuid';

import Task from './Task';

function TaskList({ taskLists, onClickComplete }) {
  return (
    <div>
      { taskLists.length === 0 ? (
        <p>할 일이 없어요!</p>
      )
        : (
          <ol>
            {
              taskLists.map(({ id, message }) => (
                <Task key={uuid()} id={id} message={message} onClickComplete={onClickComplete} />
              ))
            }
          </ol>
        )}
    </div>
  );
}

export default TaskList;
