import React from 'react';

export default function Item({ task, handleClickDeleteTask }) {
  const { id ,title } = task;
  return (
    <div>
      <li>
        {title}
        <button type="button" onClick={() => handleClickDeleteTask(id)}>
          Done
        </button>
      </li>
    </div>
  );
}
