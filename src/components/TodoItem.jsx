import React from 'react';

function TodoItem({ item: { id, text }, onClickRemove }) {
  const style = { marginLeft: '10px' };
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
