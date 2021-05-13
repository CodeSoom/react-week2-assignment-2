import React from 'react';
import PropTypes from 'prop-types';

function ToDoItems({ toDos, onClick }) {
  return (
    <ol type="1">
      {toDos.length > 0 ? (
        toDos.map((i) => (
          <li>
            {i}
            <button
              type="button"
              onClick={() => { onClick(i); }}
            >
              완료
            </button>
          </li>
        ))
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </ol>
  );
}

ToDoItems.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDoItems;
