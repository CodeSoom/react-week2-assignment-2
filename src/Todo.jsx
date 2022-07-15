import React from 'react';

import CommonButton from './CommonButton';

export default function Todo({ label, id, handleDeleteTodo }) {
  return (
    <li>
      {label}
      <CommonButton handleClick={() => handleDeleteTodo(id)}>완료</CommonButton>
    </li>
  );
}
