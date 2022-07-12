import React from 'react';

import CommonButton from './CommonButton';

export default function Todo({ lable }) {
  return (
    <li>
      {lable}
      <CommonButton lable="완료" />
    </li>
  );
}
