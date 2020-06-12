import React from 'react';

function TodoItem({ item, onClickRemove }) {
  const style = { marginLeft: '10px' };
  const { id, text } = item;
  return (
    <li>
      {text}
      <button type="button" style={style} onClick={() => onClickRemove(id)}>
        완료
      </button>
    </li>
  );
}

export default React.memo(TodoItem);
