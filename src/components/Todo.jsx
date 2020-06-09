import React from 'react';

export default function Todo({ data }) {
  return (
    <div>
      <li>
        {data}
        <button type="button">완료</button>
      </li>
    </div>
  );
}
