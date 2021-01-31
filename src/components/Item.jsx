import React from 'react';

export default function Item({ task, onClickDelete }) {
  const {id, title} = task;
  
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClickDelete(id)}>
        완료
      </button>
    </li>
  );
}
