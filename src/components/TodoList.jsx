import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, onClick }) {
  return (
    <ul>
      {todoList.map((todo) => {
        const { id, todoText } = todo;
        return (
          <TodoItem
            key={id}
            onClick={onClick}
            todoText={todoText}
            id={id}
          />
        );
      })}
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
