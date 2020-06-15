import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, onClick }) {
  const hasNotTodo = todoList.length === 0;

  if (hasNotTodo) {
    return (<div>입력 된 할 일이 없습니다.</div>);
  }

  return (
    <ul>
      {todoList.map(({ id, text }) => (
        <TodoItem
          key={id}
          onClick={onClick}
          text={text}
          id={id}
        />
      ))}
    </ul>
  );
}

TodoItem.propTypes = {
  todoList: PropTypes.arrayOf([
    PropTypes.string, // id
    PropTypes.string, // todoText
    PropTypes.boolean, // completed
  ]),
  onClick: PropTypes.func.isRequired,
};
