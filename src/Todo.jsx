import React from 'react';
import Button from "./common/Button";

export default function Todo({ todo, onClickRemoveTodo }) {
  return (
    <li>
      {todo}
      <Button
        title="완료"
        onPress={() => onClickRemoveTodo(todo)}
      />
    </li>
  )
}