import React from 'react';

import TodoAddInput from './TodoAddInput';
import TodoAddButton from './TodoAddButton';

export default function TodoHeader({ onClick }) {
  return (
    <div>
      <TodoAddInput />
      <TodoAddButton onClick={onClick} />
    </div>
  );
}
