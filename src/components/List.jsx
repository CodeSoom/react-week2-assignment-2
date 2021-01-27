import React from 'react';
import uuid from 'react-uuid';

import Task from './Task';

function List({ list, onClick }) {
  return (
    <div>
      { list.length < 1 ? (
        <p>할 일이 없어요!</p>
      )
        : (
          <ul>
            {
              list.map(({ id, message }) => (
                <Task key={uuid()} id={id} message={message} onClick={onClick} />
              ))
            }
          </ul>
        )}
    </div>
  );
}

export default List;
