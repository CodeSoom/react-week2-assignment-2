import React from 'react';

export default ({ item, index, handleRemove }) => (
  <li>
    <span>{`${index + 1}. `}</span>
    <span>{`${item.todo} `}</span>
    <button type="button" data-id={item.id} onClick={handleRemove}>완료</button>
  </li>
);
