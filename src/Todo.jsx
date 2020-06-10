import React from 'react';
import Button from './Button';

export default function Todo({ number, todo, onClick }) {
  return (
    <p>
      { number }
      .
      { todo }
      <Button name="완료" onClick={() => onClick(todo)} />
    </p>
  );
}
