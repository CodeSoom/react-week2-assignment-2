import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({ text, id, onClick }) {
  return (
    <li>
      {text}
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
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
