import React from 'react';

export default function ToDo({ id, text, deleteToDo }) {
  return (
    <li key={id}>
      {text}
      <button type="button" onClick={() => deleteToDo(id)}>
        완료
      </button>
    </li>
  );
}
