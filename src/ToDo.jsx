import React from 'react';

export default function ToDo({ uuid, text, deleteToDo }) {
  return (
    <div>
      {text}
      <button
        type="button"
        onClick={() => deleteToDo(uuid)}
      >
        완료
      </button>
    </div>
  );
}
