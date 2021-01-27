import React from 'react';
import uuid from 'react-uuid';

import Task from './Task';

function List({ list, onClick }) {
  return (
    <ul>
      {
        list.map(({ id, message }) => (
          <Task key={uuid()} id={id} message={message} onClick={onClick} />
        ))
      }
    </ul>
  );
}

export default List;
