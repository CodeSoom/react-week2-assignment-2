import React from 'react';
import ButtonDone from './ButtonDone';

function Task({ dataKey, value, onClick }) {
  return (
    <li>
      {value}
      <ButtonDone onClick={() => onClick(dataKey)} />
    </li>
  );
}

export default Task;
