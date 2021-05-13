import React from 'react';
import PropTypes from 'prop-types';

function ToDoItems({ toDos, onClick }) {
  function getToDoListView() {
    if (toDos.length <= 0) {
      return <p>할 일이 없어요!</p>;
    }
    return (
      toDos.map((todo) => (
        <li>
          {todo}
          <button type="button" key={todo} onClick={() => { onClick(todo); }}>
            완료
          </button>
        </li>
      ))
    );
  }

  return (
    <ol type="1">
      {getToDoListView()}
    </ol>
  );
}

ToDoItems.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDoItems;
