import React from 'react';

import CommonButton from './CommonButton';

export default function Todo({ lable, id }) {
  return (
    <li id={id}>
      {lable}
      <CommonButton>완료</CommonButton>
    </li>
  );
}
