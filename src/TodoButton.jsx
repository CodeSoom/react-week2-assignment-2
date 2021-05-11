import React from 'react';
import PropTypes from 'prop-types';

function TodoButton({ todo, onClickRemove }) {
  return (
    <button type="button" onClick={() => onClickRemove(todo)}>완료</button>
  );
}

TodoButton.propTypes = {
  todo: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default TodoButton;
