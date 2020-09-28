import React from 'react';

export default function Todo({ content, onClick }) {
  return (
    <li>
      {content}
      <button type="button" onClick={onClick}>
        완료
      </button>
    </li>
  );
}
