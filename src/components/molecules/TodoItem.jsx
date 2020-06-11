import React from 'react';

import Span from '../atoms/Span';
import Button from '../atoms/Button';

export default function TodoItem({ text, onComplete }) {
  return (
    <>
      <Span>{text}</Span>
      <Button
        onClick={onComplete}
      >
        완료
      </Button>
    </>
  );
}
