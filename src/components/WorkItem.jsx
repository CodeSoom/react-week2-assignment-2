import React from 'react';

import Button from './Button';

export default function WorkItem({ work, onClick }) {
  return (
    <li>
      {work}
      <Button onClick={onClick}>완료</Button>
    </li>
  );
}
