import React from 'react';

export default function Task({ element, index, onClickComplete }) {
  return (
    <li>
      {element}
      <button
        type="button"
        onClick={() => onClickComplete(index)}
      >
        완료
      </button>
    </li>
  );
}
