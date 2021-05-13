import React from 'react';

const Button = ({ children, addTodoList }) => (
  <button type="button" onClick={addTodoList}>{children}</button>
);

export default Button;
