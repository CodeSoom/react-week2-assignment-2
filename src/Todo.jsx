import React from 'react';
import Button from './Button';

export default function Todo({ content, onClick }) {
  return (
    <li>
      { content }
      <Button name="완료" onClick={onClick} />
    </li>
  );
}
