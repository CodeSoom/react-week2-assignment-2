import React from 'react';

export default function Task({ element, onClickComplete }) {
  return (
    <li>
      {element}
      <button
        type="button"
        onClick={onClickComplete}
      >
        완료
      </button>
    </li>
  );
}
