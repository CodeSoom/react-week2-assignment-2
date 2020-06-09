import React from 'react';

export default ({ todo, index }) => (
  <li>
    <span>{`${index}. `}</span>
    <span>{todo}</span>
    <button type="button">완료</button>
  </li>
);
