import React from 'react';
import PropTypes from 'prop-types';

function RemoveButton({ todo, onClickRemove }) {
  return (
    <button
      type="button"
      onClick={() => onClickRemove(todo)}
    >
      완료
    </button>
  );
}

RemoveButton.propTypes = {
  todo: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default RemoveButton;
