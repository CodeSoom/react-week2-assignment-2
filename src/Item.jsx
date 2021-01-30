import React from 'react';

function Item({ task: { id, title }, onClickDelete }) {
  return (
    <li>
      {title}
      <button type="button" onClickDelete={() => onClickDelete(id)}>
        Done
      </button>
    </li>
  );
}

export default Item;
