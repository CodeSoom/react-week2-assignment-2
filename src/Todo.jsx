import React from 'react';

import CommonButton from './CommonButton';

export default function Todo({ label, id }) {
  return (
    <li id={id}>
      {label}
      <CommonButton>완료</CommonButton>
    </li>
  );
}
