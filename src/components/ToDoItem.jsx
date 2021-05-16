import React from 'react';
import PropType from 'prop-types';

function ToDoItem({ todo: { id, title }, onClick }) {
  return (
    <li>
      {title}
      <button
        type="button"
        key={id}
        onClick={() => {
          onClick(id);
        }}
      >
        완료
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropType.exact({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
  }).isRequired,
  onClick: PropType.func.isRequired,
};

export default ToDoItem;
