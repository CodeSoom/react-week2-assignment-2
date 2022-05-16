import React from 'react';

export default function Item({ item: { id, todo }, handleComplete }) {
  return (
    <li>
      {todo}

      <button type="button" onClick={() => handleComplete(id)}>
        완료
      </button>
    </li>
  );
}
