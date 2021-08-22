import React from 'react';

export default function Item({ task, onClickDelete }) {
  const { id ,title } = task;
  return (
    <div>
      <li>
        {title}
        <button type="button" onClick={() => onClickDelete(id)}>
          Done
        </button>
      </li>
    </div>
  );
}
