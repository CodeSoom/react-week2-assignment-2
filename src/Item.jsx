import React from 'react';

import Button from './Button';

function Item({ todo: { id, content }, onClick }) {
  return (
    <li>
      <span>{content}</span>
      <Button onClick={() => onClick(id)}>
        완료
      </Button>
    </li>
  );
}

export default Item;
