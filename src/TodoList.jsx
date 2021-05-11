import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import NotingTodo from './NothingTodo';

function TodoList({ todoList, onClickRemove }) {
  return (
    <div>
      {(todoList.length > 0 && (
        <ol>
          {todoList.map((todo) => (
            <Todo key={todo} todo={todo} onClickRemove={onClickRemove} />
          ))}
        </ol>
      )) || (
        <NotingTodo />
      )}
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

export default TodoList;
