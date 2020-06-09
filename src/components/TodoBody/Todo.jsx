import React from 'react';

import TodoRemoveButton from './TodoRemoveButton';

export default function Todo({ id, data, onClick }) {
  return (
    <li>
      {data}
      <TodoRemoveButton id={id} onClick={onClick} />
    </li>
  );
}
