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

export default function TodoItem({ index, todo, onRemoveTodoItem }) {
  return (
    <li style={liStyle}>
      <span style={spanStyle}>
        {index}
        .
        {' '}
        {todo.title}
      </span>
      <button type="button" onClick={() => onRemoveTodoItem({ id: todo.id })}>완료</button>
    </li>
  );
}
