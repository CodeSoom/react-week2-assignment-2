import React from 'react';
import PropTypes from 'prop-types';

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

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default Todo;
