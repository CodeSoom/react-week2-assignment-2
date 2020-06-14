import React from 'react';

export default function Item({ index, item, onClickConfirm }) {
  return (
    <div>
      <span>
        {(index + 1)}
        .
        {' '}
        {item.task}
        {' '}
      </span>
      <button type="button" onClick={() => onClickConfirm(item)}>
        완료
      </button>
    </div>
  );
}
