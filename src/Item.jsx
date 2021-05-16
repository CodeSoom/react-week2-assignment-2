import React from 'react';
import PropTypes from 'prop-types';

// 한번더 디스트럭처링
export default function Item({ task: { id, title }, onClickDeleteTask }) {
  Item.propTypes = {
    task: PropTypes.string.isRequired,
    onClickDeleteTask: PropTypes.string.isRequired,
  };

  return (
    <li>
      {title}
      <button type="button" onClick={() => onClickDeleteTask(id)}>
        Done
      </button>
    </li>
  );
}
