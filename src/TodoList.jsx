import React from 'react';
import TodoListItem from './TodoListItem';

const ulStyle = {
  listStyleType: 'none',
  padding: '5px',
};

const TodoList = ({ todos, onRemoveTodoItem }) => {
  const todoList = todos.map((todo, index) => (
    <TodoListItem index={index} todo={todo} key={todo.id} onRemoveTodoItem={onRemoveTodoItem} />
  ));

  return (
    todoList.length !== 0 ? (<ul style={ulStyle}>{ todoList }</ul>) : '할 일이 없어요!'
  );
};

export default TodoList;
