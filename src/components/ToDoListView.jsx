import React from 'react';
import PropTypes from 'prop-types';

// 구조 분해 할당 응용하기 : 필요한 컴포넌트를 props로 만들어 받기.

function createToDoListView({ toDos, onClick, defaultView }) {
  if (toDos.length <= 0) {
    return defaultView;
  }
  return (
    <ol type="1">
      {toDos.map((todo) => (
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
      ))}
    </ol>
  );
}

function ToDoListView({
  onClick,
  toDos,
  defaultView = <p>할 일이 없어요!</p>,
  toDoListView = createToDoListView({ toDos, onClick, defaultView }),
}) {
  return toDoListView;
}

ToDoListView.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDoListView;
