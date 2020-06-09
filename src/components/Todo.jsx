import React from 'react';

export default function Todo({ id, data, onClick }) {
  return (
    <li>
      {data}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
}
