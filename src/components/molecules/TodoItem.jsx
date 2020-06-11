import React from 'react';

import Span from '../atoms/Span';
import Button from '../atoms/Button';

export default function TodoItem({ text }) {
  return (
    <>
      <Span>{text}</Span>
      <Button>완료</Button>
    </>
  );
}
