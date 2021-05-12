import React from 'react';
import PropTypes from 'prop-types';

import TodoButton from './TodoButton';

function Todo({ todo, onClickRemove }) {
  return (
    <li>
      {todo}
      <TodoButton
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
