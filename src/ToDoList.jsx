/* eslint-disable react/prop-types */
import React from 'react';

const ToDoList = ({ list }) => {
  if (list.length === 0) return <p>할 일이 없어요!</p>;
  return (
    <ol>
      {list.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ol>
  );
};

export default ToDoList;
