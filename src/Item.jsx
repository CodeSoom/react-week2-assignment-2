import React from 'react';

import Button from './Button';

export default function Item({ index, item, onClickConfirm }) {
  const label = '완료';
  return (
    <div>
      <span>
        {(index + 1)}
        .
        {' '}
        {item.task}
        {' '}
      </span>
      <Button
        onClick={() => onClickConfirm(item)}
        label={label}
      />
    </div>
  );
}
