import React from 'react';

const liStyle = {
  marginTop: '3px',
  display: 'flex',
  height: '25px',
};

const spanStyle = {
  flex: 1,
  lineHeight: '25px',

};

const TodoListItem = ({ index, todo, onRemoveTodoItem }) => (
  <li style={liStyle}>
    <span style={spanStyle}>
      {index}
      .
      {' '}
      {todo.todo}
    </span>
    <button type="button" onClick={() => onRemoveTodoItem({ id: todo.id })}>완료</button>
  </li>
);

export default TodoListItem;
