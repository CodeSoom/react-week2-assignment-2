import React from 'react';

import RemoveButton from './RemoveButton';

export default function Todo({ todo, onClickRemove }) {
  return (
    <li>
      {todo}
      <RemoveButton
        todo={todo}
        onClickRemove={onClickRemove}
      />
    </li>
  );
}
