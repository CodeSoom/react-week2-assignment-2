import React from 'react';

import Button from './common/Button';

export default function Todo({ title, onClickRemoveTodo }) {
  return (
    <li>
      {title}
      <Button
        title="완료"
        onPress={onClickRemoveTodo}
      />
    </li>
  );
}
