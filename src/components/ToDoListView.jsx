import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from './ToDoItem';
// 1) todo obj를 처리하기
// 2) todo Item 컴포넌트를 사용하기.
function ToDoListView({ onClickDone, toDos }) {
  if (toDos.length <= 0) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ol type="1">
      {toDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onClick={onClickDone} />
      ))}
    </ol>
  );
}

ToDoListView.propTypes = {
  toDos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDone: PropTypes.func.isRequired,
};

export default ToDoListView;
