import React from 'react';

import TodoRemoveButton from './TodoRemoveButton';

export default function Todo({ data, onClick }) {
  return (
    <li>
      {data}
      <TodoRemoveButton onClick={onClick} />
    </li>
  );
}
