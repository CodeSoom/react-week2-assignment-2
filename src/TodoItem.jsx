import React from 'react';

export default function TodoItem({ item, onClicktoRemove }) {
  const style = { marginLeft: '10px' };
  return (
    <li>
      {item.text}
      <button type="button" style={style} onClick={() => onClicktoRemove(item.id)}>완료</button>
    </li>
  );
}
