import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({ todoText, id, onClick }) {
  return (
    <li>
      {todoText}
      <button
        type="button"
        onClick={() => onClick(id)}
      >
        완료
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todoText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
