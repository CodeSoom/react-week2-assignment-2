import React from 'react';
import PropTypes from 'prop-types';

// 구조 분해 할당 응용하기 : 필요한 컴포넌트를 props로 만들어 받기.
function ToDoItems({
  onClick,
  toDos,
  toDoListView = toDos.map((todo) => (
    <li>
      {todo}
      <button
        type="button"
        key={todo}
        onClick={() => {
          onClick(todo);
        }}
      >
        완료
      </button>
    </li>
  )),
}) {
  function getToDoListView() {
    if (toDos.length <= 0) {
      return <p>할 일이 없어요!</p>;
    }
    return <ol type="1">{toDoListView}</ol>;
  }

  return getToDoListView();
}

ToDoItems.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDoItems;
