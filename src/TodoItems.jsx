import React from 'react';

import TodoItem from './TodoItem';

const ulStyle = {
  listStyleType: 'none',
  padding: '5px',
};

export default function TodoItems({ todos, onRemoveTodoItem }) {
  const todoList = todos.map((todo, index) => (
    <TodoItem index={index} todo={todo} key={todo.id} onRemoveTodoItem={onRemoveTodoItem} />
  ));

  return (
    todoList.length !== 0 ? (<ul style={ulStyle}>{ todoList }</ul>) : '할 일이 없어요!'
  );
}
