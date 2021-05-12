import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

function TodoList({ todoList, onClickRemove }) {
  if (todoList.length === 0) {
    return <p>할 일이 없어요!</p>;
  }

  return (
    <div>
      <ol>
        {todoList.map((todo) => (
          <Todo key={todo} todo={todo} onClickRemove={onClickRemove} />
        ))}
      </ol>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default TodoList;
