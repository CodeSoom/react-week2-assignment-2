import React from 'react';
import Button from './Button';

export default function Todo({ todo, onClick }) {
  return (
    <li>
      { todo }
      <Button name="완료" onClick={onClick} />
    </li>
  );
}
