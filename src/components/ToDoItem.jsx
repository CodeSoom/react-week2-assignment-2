import React from 'react';
import PropType from 'prop-types';

export default function ToDoItem({ todo: { id, title }, onClick }) {
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

ToDoItem.propType = {
  todo: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
  }),
  onClick: PropType.func.isRequired,
};
