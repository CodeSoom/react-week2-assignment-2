import React from 'react';

import RemoveButton from './RemoveButton';

function Todo({ todo, onClickRemove }) {
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

export default Todo;
