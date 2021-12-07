/* eslint-disable react/prop-types */
import React from 'react';

const ToDoList = ({ list }) => (
  <ol>
    {list.map(({ id, text }) => (
      <li key={id}>{text}</li>
    ))}
  </ol>
);

export default ToDoList;
