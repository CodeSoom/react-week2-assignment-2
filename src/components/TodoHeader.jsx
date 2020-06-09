import React from 'react';

import TodoAddButton from './TodoAddButton';

export default function TodoHeader({ onClick }) {
  return (
    <div>
      <input />
      <TodoAddButton onClick={onClick} />
    </div>
  );
}
