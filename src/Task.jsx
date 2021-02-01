import React from 'react';

import ButtonComplete from './ButtonComplete';

function Task({ dataKey, value, onClick }) {
  return (
    <li>
      {value}
      <ButtonComplete onClick={() => onClick(dataKey)} />
    </li>
  );
}

export default Task;
