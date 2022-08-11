import { useState } from 'react';

import Todos from './Todos';
import { createTodo } from './Todos';
import { initialTodos } from './Todos';

export default function AddTodo({ onClick }) {

  return (
    <div>
      <input></input>
      <button onClick={onClick}>
        Add
      </button>
    </div>
  );
}
