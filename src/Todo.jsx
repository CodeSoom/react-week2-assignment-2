import React from 'react';

export default function Todo({ index, text, onClick }) {
  return (
    <p>
      <span>
        {index}
        .
        {' '}
      </span>
      <span>{text}</span>
      <button type="button" onClick={onClick}>
        완료
      </button>
    </p>
  );
}
